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
