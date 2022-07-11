//prototypal inheritance

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}`
        })

        return bio
    }

    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes = []) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.fullName} is a ${this.position}.`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes = []) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    getBio() {
        return this.grade > 70 ? `${this.firstName}   is a passig the class.` : `${this.firstName}   is a failing the class.`
    }
    updateGrade(num) {
        this.grade += num
    }
}

const student = new Employee('Adrian', 'Pura', '26', 'teacher')
student.fullName = 'Test Name'
console.log(student.getBio())
// console.log(student.updateGrade(2))
console.log(student.getBio())

// const me = new Employee('Adrian', 'Adrian', 26, 'CEO', ['teaching', 'biking'])
// me.setName('Adrian Pura')
// console.log(me.getBio())
// console.log(me.getYearsLeft())

// const person2 = new Person('Person2', 'Person2', 22)
// console.log(person2.getBio())