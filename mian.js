function gamer(_gamer_name, _age, _is_active, _is_team, _game) {
	;(this.gamer_name = _gamer_name),
		(this.age = _age),
		(this.is_active = _is_active),
		(this.is_team = _is_team),
		(this.game = _game)
}

let addBit = [
	{
		gamer_name: 'islom',
		age: 19,
		is_active: true,
		is_team: 'lalak',
		game: 'csgo',
	},
	{
		gamer_name: 'aziz',
		age: 19,
		is_active: true,
		is_team: 'lalak',
		game: 'csgo',
	},
	{
		gamer_name: 'asad',
		age: 19,
		is_active: true,
		is_team: 'exportus',
		game: 'csgo',
	},
]

function workpass() {
	try {
		let gamer_name = prompt("O'yinchi ismini kiriting")
		let age = Number(prompt("O'yinchi yoshini kiriting"))
		let is_active = prompt('Aktiv xolatini kiriting: faol || nofaol')
		let is_team = prompt("O'yinchini Jamoasini kiriting")
		let game = prompt("O'yinchi qanday o'yin o'ynaydi o'zi?")
		if (!gamer_name.trim()) {
			throw new Error("Bo'sh joy qolib ketti (O'yinchi ismi)")
		}
		if (isNaN(age)) {
			throw new Error('Yosh raqamda kiritmagan')
		}
		if (!(is_active !== 'faol' || is_active !== 'nofaol')) {
			throw new Error('Faol yoki Nofaol qiymatlarini kiriting!')
		}
		if (!is_team.trim()) {
			throw new Error("Bo'sh joy qolib ketti (Jamoa)")
		}
		if (!game.trim()) {
			throw new Error("Bo'sh joy qolib ketti(O'yin nomi)")
		}

		let fulGamer = new gamer(
			gamer_name,
			age,
			is_active == 'faol' ? true : false,
			is_team,
			game
		)
		addBit.unshift(fulGamer)
	} catch (error) {
		alert(error.message)
		workpass()
	} finally {
		console.log(addBit)
	}
}
function ozgarish() {
	try {
		let newsFoodballis = prompt('fudbolchi ismi bilan qidiring!')
		let addFoodball = addBit.find(item =>
			item.gamer_name.toLowerCase().includes(newsFoodballis.toLowerCase())
		)

		if (!newsFoodballis == addFoodball.gamer_name) {
			throw new Error('fudbolchi ismi topilmadi')
		}
		let jamoas = prompt('yangi jamoaning nomini yozing!')
		addFoodball.is_team = jamoas

		console.log(addFoodball)
	} catch (error) {
		alert(error.message)
		ozgarish()
	} finally {
		console.log('finished')
	}
}

function Comasadd() {
	try {
		let jamoa = prompt('Jamoa nomini yozing')
		let Djamoa = []

		if (!Array.isArray(addBit)) {
			throw new Error('addBit massivi aniqlanmagan yoki noto‘g‘ri formatda')
		}

		let found = false
		for (let i = 0; i < addBit.length; i++) {
			if (jamoa === addBit[i].is_team) {
				Djamoa.unshift(addBit[i])
				found = true
			}
		}

		if (!found) {
			throw new Error("Bunday jamoa yo'q. Iltimos bor jamoani kiriting")
		}

		console.log("Jamoa ma'lumotlari:", Djamoa)
	} catch (error) {
		alert(error.message)
		Comasadd()
	} finally {
		console.log('finished')
	}
}

function clearConsole() {
	console.clear()
}
