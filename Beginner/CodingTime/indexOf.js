/*
    요구사항 indexOf()를 사용하여 두번째 파라미터에 음수가 들어오면 -1을 반환한다.
    이것을 하는 이유는 간단하다 발생 가능한 케이스를 기술하고 이에 맞는 코드를 작성하기 위함
    음수를 넣는 의미는 없다 하지만 들어갈수는 있는 부분이다. 그래서 나는 함수를 만들어서 그걸 인자로 받고 인자가 음수가 들어오면 나는 큰 값을 넣어줘서 인덱스 
    가 커서 -1을 반환하는 그런 형식으로 풀이해봤다.
*/

let value = '123123123123'
const check = num => {
	if (num < 0) return 999999999999999
}
console.log(value.indexOf(3, check(-10000)))
