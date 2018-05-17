// делаем токен ёпта 
pragma solidity ^0.4.16;

/**
 * @title SafeMath - библиотечка 
 * @dev Безопасные математические операции (анти-переполнение буфера)
 */

 // Уножение
library SafeMath {
  function mul(uint256 a, uint256 b) internal constant returns (uint256) {
    uint256 c = a * b;
    assert(a == 0 || c / a == b);
    return c;
  }

// Деление
  function div(uint256 a, uint256 b) internal constant returns (uint256) {
    // assert(b > 0); // Solidity automatically throws when dividing by 0
    uint256 c = a / b;
    // assert(a == b * c + a % b); // There is no case in which this doesn't hold
    return c;
  }

// Минус
  function sub(uint256 a, uint256 b) internal constant returns (uint256) {
    assert(b <= a);
    return a - b;
  }


// Плюс
  function add(uint256 a, uint256 b) internal constant returns (uint256) {
    uint256 c = a + b;
    assert(c >= a);
    return c;
  }
}

////////////////////////////////////////////////////////////////////////////

/**
 * @title ERC20Basic
 * @dev Самая простая версия ERC20 интерфейса
 * @dev подробно смотрите на https://github.com/ethereum/EIPs/issues/179
 */

contract ERC20Basic {
    uint256 public totalSupply;  // totalSupply - общая эмиссия
    function balanceOf(address who) public constant returns (uint256);
    function transfer(address to, uint256 value) public returns (bool);
    event Transfer(address indexed from, address indexed to, uint256 value);
}

/**
* @title ERC20 интерфэйс
* @dev смотрите в гите 
 */

contract ERC20 is ERC20Basic {
    function allowance(address owner, address spender) public constant returns (uint256);
    function transferFrom(address from, address to uint256 value) public returns (bool);
    function approve(address spender, uint256 value) public returns (bool);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

contract BasicToken is ERC20Basic {
    using safeMath for uint256;
    mapping (address=>uint256) balances;

    function transfer(address _to, uint256 _value) public returns (bool) {
        require(_to != address(0));
        require(_value <= balance[msg.sender]);

        // SafeMath.sub не позволит отправить токенов если нет нужного кол-во на балансе
        balances[msg.sender] = balances[msg.sender].sub(_value);
        balances[_to] = balances[_to].add(_value);
        Transfer(msg.sender, _to, _value);
        return true;        
    }

    function balanceOf(address _owner) public constant returns (uint 256 balance) {
        return balances[_owner];
    }
}

contract StandartToken is ERC20, BasicToken {
    mapping (address =>mapping (address=>uint256)) internal allowed;
    
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool) {
        require(_to != address(0));
        require(_value <= balances[from]);
        require(_value <= allowed[_from][msg.sender]);
        balances[_from] = balances[_from].sub(_value);
        balances[_to] = balances[_to].add(_value);
        allowed[_from][msg.sender] = allowed[_from][msg.sender].sub(_value);
        Transfer(_from, _to, _value);
        return true;
    }
}