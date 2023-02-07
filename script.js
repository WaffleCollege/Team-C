'use strict'
// Please don't delete the 'use strict' line above

console.log("Hello world!");

let expected;
let actual;

//test.
  
//１
   /**
    * @param {Array<number>} ??? - 数値型の要素を持つ配列

    * @returns {number} 与えられた配列のすべての数字の合計
    */
   function sumArray(array) {
    let sum = 0;
    for (const number of array){
        sum += number;
    }
    return sum;
   }

  actual = sumArray([1, 2, 3, 4]);
  expected = 10;

  test(actual, expected);

  function test(actualExpression, expectedExpression) {
    if (actualExpression === expectedExpression) {
        console.log("Test PASSED.");
      } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
      }
  }

  // さらにテストを書きましょう。
actual = sumArray([5,6,7,8]);
expected = 26;

test(actual, expected);

test(actual, expected);

//２．関数productArrayを宣言
/**
    * @param {Array<number>} ??? - 数値型の要素を持つ配列

    * @returns {number} 与えられた配列のすべての数字をかけあわせた答え
    */
function productArray(array) {
    let answer = 1;
    for (const number of array) {
        answer *= number;
    }
    return answer;
  }

  function test(actualExpression, expectedExpression) {
    if (actualExpression === expectedExpression) {
        console.log("Test PASSED.");
      } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
      }
  }

  actual = productArray([1, 2, 3, 4]);
  expected = 24;

  test(actual, expected);

  actual =productArray([2,5,6]);
  expected = 60;

  test(actual, expected);

//3 関数hasFunを宣言
 /**
    * @param {Array<any>} ???
    * @returns {boolean} 与えられた配列に "fun" という文字列が入っているかどうかを表すブーリアン
    */

 
 function hasFun(array) {
  return array.includes("fun");
  // ここにコードを書きましょう。
}

actual = hasFun(["whatever", 2, false, "fun", "hello"]);
expected = true;

function test(actualExpression, expectedExpression) {
  if (actualExpression === expectedExpression) {
      console.log("Test PASSED.");
    } else {
      console.error("Test FAILED. Keep trying!");
      console.group("Result:");
      console.log("  actual:", actual);
      console.log("expected:", expected);
      console.groupEnd();
    }
}

test(actual, expected);

actual = hasFun(["whatever", 2, false, "run", "hello"]);
expected = false;

test(actual, expected);

// さらにテストを書きましょう。

actual = hasFun(["You", 3, "Paris", "Strasbourg", "Berlin"]);
expected = false;

test(actual, expected);

//4 
/**
    * @param {Array<any>} ???
    * @returns {boolean} 与えられた配列の要素がすべてブーリアンかどうかを表すブーリアン
    */
function containsOnlyBooleans(array) {
    return array.every ((any) => {
      return typeof any == "boolean";
});
  }
  // ここにコードを書きましょう。


actual = containsOnlyBooleans([true, false, true, false, false]);
expected = true;

function test(actualExpression, expectedExpression) {
  if (actualExpression === expectedExpression) {
      console.log("Test PASSED.");
    } else {
      console.error("Test FAILED. Keep trying!");
      console.group("Result:");
      console.log("  actual:", actual);
      console.log("expected:", expected);
      console.groupEnd();
    }
}

test(actual, expected);

actual = containsOnlyBooleans([true, true, true, "not a boolean"]);
expected = false;

test(actual, expected);

// さらにテストを書きましょう。

//問題5

 /**
    * @param {Array<any>} ??? - 1番目の配列
    * @param {Array<any>} ??? - 2番目の配列
    * @returns {Array<any>} 与えられた2つの配列を連結させた配列
    */
 function concatenate(array1, array2) {
  return array1.concat(array2);
}

actual = concatenate(["eeny", "meeny"], ["miny", "moe"]);
expected = ["eeny", "meeny", "miny", "moe"];

// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// さらにテストを書きましょう。

actual = concatenate(["midore", "boulangerie"], ["tour", "orange"]);
expected = ["midore", "boulangerie","tour", "orange"];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

//問題6 
 /**
    * @param {Array<number>} ??? - 数値型の要素を持つ配列

    * @returns {Array<number>} 与えられた配列の中の偶数だけを入れた配列
    */
function getEvenNumbers(array) {
 return array.filter((number) => {
    return number % 2 === 0;
  });
}
actual = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
expected = [2, 4, 6, 8];

// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
function test(actual, expected) {
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}
}

test(actual, expected);

actual = getEvenNumbers([2, 6, 9, 30, 37, 69, 100]);
expected = [2, 6, 30, 100];

test(actual, expected);

//問題7
 /**
    * @param {Array<number>} ??? - 数値型の要素を持つ配列

    * @param {number} ??? - 配列の中の数字にかける数字
    * @returns {Array<number>} 配列の中の数字に第2引数をかけた結果が入った新しい配列
    */
 function getMultipliedArray(array, multiplyNumber) {
  return array.map((number) => {
    return number * multiplyNumber;
  });
}

actual = getMultipliedArray([1, 2, 3], 6);
expected = [6, 12, 18];

// 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
function test (actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}
}

test(actual, expected);

// さらにテストを書きましょう。

actual = getMultipliedArray([3, 4, 5], 10);
expected = [30, 40, 50];

test(actual, expected);

//中級演習
//1. 関数 isSorted を宣言
   /**
    * @param {Array<number>} ??? - 数値型の要素を持つ配列

    * @returns {boolean} 与えられた配列が昇順になっているかを表すブーリアン
    */
   function isSorted(array) {  
    return JSON.stringify(array) === JSON.stringify(array.sort((a, b) => {
      return a - b}));
    };

  actual = isSorted([1, 2, 3]);
  expected = true;

  function test (actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
  }

  test(actual, expected);

  actual = isSorted([3, 2, 3]);
  expected = false;

  test(actual, expected);

  // さらにテストを書きましょう。

  actual = isSorted([5, 2, 1, 8, 10]);
  expected = false;

  test(actual, expected);

  actual = isSorted([5, 6, 7, 8]);
  expected = true;

  test(actual, expected);

  //2. 関数 countOccurrences を宣言してください。 保留
  function countOccurrences(array, count) {
    
  };
   
 
  actual = countOccurrences([1, 2, 3], 2);
  expected = 1;
 
  if (actual === expected) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
 
  actual = countOccurrences([1, 2, 2], 2);
  expected = 2;
 
  if (actual === expected) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
 
  actual = countOccurrences([1, 2, "elephant"], "elephant");
  expected = 1;
 
  if (actual === expected) {
    console.log("Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.groupEnd();
  }
 

 // さらにテストを書きましょう。

 //3. 関数getOperatedArrayを宣言してください。保留
    /**
    * @param {Array<number>} ???
    * @param {"+"|"-"|"*"|"/"|"**"|"%"} ??? - 使用したい算術演算子を表す文字列
    * @param {number} ??? - 使用したい被演算子
    * @returns {Array<any>} 与えられた配列の各要素に、引数の算術演算子と被演算子を適用した結果が入った新たな配列
    */
    function getOperatedArray (any, operator, number2) {
      return array.map((number) => {
        return number + operator + number2;
      });
    };

      // ここにコードを書きましょう。
    
    actual = getOperatedArray([1, 2, 3], "+", 5);
    // [1, 2, 3] のそれぞれの要素に5をたす
    // [1+5, 2+5, 3+5]
    expected = [6, 7, 8];
 
    // 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("Test PASSED.");
    } else {
      console.error("Test FAILED. Keep trying!");
      console.group("Result:");
      console.log("  actual:", actual);
      console.log("expected:", expected);
      console.groupEnd();
    }
 
    actual = getOperatedArray([9, 6, 3], "/", 3);
    expected = [3, 2, 1];
 
    // 現時点では、配列を比較するには JSON.stringify を使う必要があると覚えておいてください。
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("Test PASSED.");
    } else {
      console.error("Test FAILED. Keep trying!");
      console.group("Result:");
      console.log("  actual:", actual);
      console.log("expected:", expected);
      console.groupEnd();
    }
 
    // さらにテストを書きましょう。


//続・条件分岐
//1. 論理否定演算子は、オペランドが0(false)またはゼロ以外(true)
//のいずれに評価されるかを決定する。
