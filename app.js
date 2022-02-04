/*========== DATA ==========*/
let data = {
		initTemp: (5 * Math.sin(3)).toFixed(1),
		time: 0,
		dt: 0.1054, //Max 0.1054
		dx: 0.005,
		hext: 15, 
		lambdaEqExt: 0.005 * 15 / 2,
		volume: Math.pow(0.005, 3),
		computing: false,
		computeTime: 2,
		maxPower: 7/36,
		power: 0,
		powerMode: '0',
		setPoint: 3,
		consumption: 0,
		temperatureList: {centerTemperature: [], copperTemperature: []}
	},
	A = {name: 'air', color: '#73b9f4', temperature: data.initTemp, cp: 1004, lambda: data.lambdaEqExt, rho: 1.3},
	C = {name: 'copper', color: '#54e8aa', temperature: data.initTemp, cp: 380, lambda: 401, rho: 8960},
	G = {name: 'glass', color: '#98fa7f', temperature: data.initTemp, cp: 720, lambda: 1, rho: 2530},
	I = {name: 'insulation', color: '#3884c5', temperature: data.initTemp, cp: 1020, lambda: 0.6, rho: 400},
	objectSliceList =	[[[A],[A],[A],[A],[A],[A],[A],[A],[A],[A],[A],[A],[A],[A],[A],[A],[A]],
						 [[A],[A],[A],[A],[A],[A],[I],[I],[I],[I],[I],[A],[A],[A],[A],[A],[A]],
						 [[A],[A],[A],[A],[I],[I],[C],[C],[C],[C],[C],[I],[I],[A],[A],[A],[A]],
						 [[A],[A],[A],[I],[C],[C],[G],[G],[G],[G],[G],[C],[C],[I],[A],[A],[A]],
						 [[A],[A],[I],[C],[G],[G],[G],[G],[G],[G],[G],[G],[G],[C],[I],[A],[A]],
						 [[A],[A],[I],[C],[G],[G],[G],[G],[G],[G],[G],[G],[G],[C],[I],[A],[A]],
						 [[A],[I],[C],[G],[G],[G],[G],[G],[G],[G],[G],[G],[G],[G],[C],[I],[A]],
						 [[A],[I],[C],[G],[G],[G],[G],[G],[G],[G],[G],[G],[G],[G],[C],[I],[A]],
						 [[A],[I],[C],[G],[G],[G],[G],[G],[G],[G],[G],[G],[G],[G],[C],[I],[A]],
						 [[A],[I],[C],[G],[G],[G],[G],[G],[G],[G],[G],[G],[G],[G],[C],[I],[A]],
						 [[A],[I],[C],[G],[G],[G],[G],[G],[G],[G],[G],[G],[G],[G],[C],[I],[A]],
						 [[A],[A],[I],[C],[G],[G],[G],[G],[G],[G],[G],[G],[G],[C],[I],[A],[A]],
						 [[A],[A],[I],[C],[G],[G],[G],[G],[G],[G],[G],[G],[G],[C],[I],[A],[A]],
						 [[A],[A],[A],[I],[C],[C],[G],[G],[G],[G],[G],[C],[C],[I],[A],[A],[A]],
						 [[A],[A],[A],[A],[I],[I],[C],[C],[C],[C],[C],[I],[I],[A],[A],[A],[A]],
						 [[A],[A],[A],[A],[A],[A],[I],[I],[I],[I],[I],[A],[A],[A],[A],[A],[A]],
						 [[A],[A],[A],[A],[A],[A],[A],[A],[A],[A],[A],[A],[A],[A],[A],[A],[A]]
						]

/*========== VIEW ==========*/

//A function to create a node easily
function createElement(type, parent, className = false, idName = false, backColor = false, initTemp = false) {
	let node = document.createElement(type)

	if(idName) {node.id = idName}
	if(className) {node.classList.add(className)}
	if(backColor) {node.style.background = backColor}
	if(initTemp) {node.innerHTML = initTemp}

	parent.appendChild(node)
	return node
}

//We add some basic node to the app-section
let objectSlice, table, tbody
function createSkeleton(beginning) {
	objectSlice = createElement('div', beginning, false, 'object-slice')
	table 		= createElement('table', objectSlice, false)
	tbody 		= createElement('tbody', table, false, false)
	return tbody
}

let parentElement = createSkeleton(document.querySelector('#app-section'))

//Finally we create our columns (15 in a row)
let newRow, newcolumn
objectSliceList.forEach(row => {
	newRow = createElement('tr', parentElement, 'object-row', false)
	row.forEach(column => {
		newcolumn = createElement('td', newRow, 'object-column', false, column[0].color, data.initTemp)
		column[1] = {}
		column[1].html = newcolumn 
		column[1].temperature = [column[0].temperature]
	})
})

//Different color for the center
document.querySelector('#app-section .object-row:nth-child(9) .object-column:nth-child(9)').style.background = '#8acb7a'

function updateTimeView(time) {
	let days = Math.floor((time / (3600 * 24))),
		hours = Math.floor((time - days * 3600 * 24) / 3600),
		minutes = Math.floor((time - hours * 3600 - days * 3600 * 24) / 60),
		secondes = Math.floor((time - minutes * 60 - hours * 3600 - days * 3600 * 24))

	document.querySelector('#day-count').innerHTML = days
	document.querySelector('#hour-count').innerHTML = hours
	document.querySelector('#minute-count').innerHTML = minutes
	document.querySelector('#sec-count').innerHTML = secondes
}

function updatePowerView(power) {
	document.querySelector('#display-power').innerHTML = (power * 36).toFixed(1) + ' W'
}

function updateEnergyView(energy) {
	document.querySelector('#display-energy').innerHTML = energy.toFixed(1) + ' Wh'
}

function setMatrixView(matrix) {
	let property = matrix.classList[1], value, index
	property == 'lambda' ? index = 0 : index = 1
	parentElement = createSkeleton(matrix)

	objectSliceList.forEach(row => {
		newRow = createElement('tr', parentElement, 'object-row', false)
		row.forEach(column => {
			column[index][property] ? value = column[index][property].toFixed(3) : value = false
			createElement('td', newRow, 'object-column', false, false, value) 
		})
	})
}

let canvas = document.querySelector('.canvas-function'), ctx, division, scale = 10
ctx = canvas.getContext('2d')

function updateCanvasView() {
	ctx.clearRect(0, 0, canvas.width, canvas.height)

	//Drawing the axes
	ctx.beginPath()
	ctx.strokeStyle = 'white'
	ctx.lineWidth = 2
	ctx.moveTo(1, 1)
	ctx.lineTo(1, canvas.height - 1)
	ctx.lineTo(canvas.width - 1, canvas.height - 1)
	ctx.stroke()

	//Addind the text
	ctx.font = "20px Arial"
	ctx.fillStyle = "white"
	ctx.fillText("T(t)", 15, 25)
	ctx.fillText("t", canvas.width - 10, canvas.height - 10)

	if(data.computing == false) {return}

	//Center temperature
	ctx.beginPath()
	ctx.strokeStyle = 'rgb(138, 203, 122)'
	ctx.lineWidth = 2
	ctx.moveTo(2, 300 - scale * data.temperatureList.centerTemperature[0])
	division = 0

	data.temperatureList.centerTemperature.forEach(value => {
		ctx.lineTo(division, canvas.height - scale * value)
		division = division + canvas.width / data.temperatureList.centerTemperature.length
	})
	ctx.stroke()

	//Copper temperature
	ctx.beginPath()
	ctx.strokeStyle = '#fc3f85'
	ctx.lineWidth = 2
	ctx.moveTo(2, 300 - scale * data.temperatureList.copperTemperature[0])
	division = 0

	data.temperatureList.copperTemperature.forEach(value => {
		ctx.lineTo(division, canvas.height - scale * value)
		division = division + canvas.width / data.temperatureList.copperTemperature.length
	})
	ctx.stroke()

	ctx.beginPath()
	ctx.strokeStyle = 'rgb(115, 185, 244)'
	ctx.lineWidth = 2
	ctx.moveTo(2, 300 - scale * data.setPoint)
	ctx.lineTo(canvas.width, 300 - scale * data.setPoint)
	ctx.stroke()
}

/*========== CONTROLLERS ==========*/

let temperatureValue, K, B
function updatePower(mode) {
	switch(mode) {
		case '0':
			data.power = 0
			break
		case '100':
			data.power = data.maxPower
			break
		case'0/1':
			temperatureValue = objectSliceList[8][8][1].temperature[1]
			temperatureValue < data.setPoint ? data.power = data.maxPower : data.power = 0
			break
		case'P':
			K = -0.7
			B = 2.1

			if(objectSliceList[8][8][1].temperature[1] >= data.setPoint) {
				data.power = 0 
				console.log(0)
			} else if(objectSliceList[8][8][1].temperature[1] >= (1 - B) / K) {
				data.power = data.maxPower * (K * objectSliceList[8][8][1].temperature[1] + B)
			} else {
				data.power = data.maxPower
				console.log(1)
			}
			break
		case 'PI':
			break
	}
}

let elementProperties, elementValues
function setFoValues() {
	//Fourier number for North, South, West, East, Above, and Below each cube
	for (var row = 0; row <= 16; row++) {
		for (var column = 0; column <= 16; column++) {

			elementProperties 	= objectSliceList[row][column][0]
			elementValues 		= objectSliceList[row][column][1]

			switch(elementProperties.name) {
				case 'air':
					elementValues.foNorth 			= 0
					elementValues.foSouth 			= 0
					elementValues.foWest 			= 0
					elementValues.foEast 			= 0
					elementValues.foAboveAndBelow 	= 0
					break;
				default:
					elementValues.foNorth 			= data.dt / (data.dx * data.dx * elementProperties.rho * elementProperties.cp * (1 / 2 / elementProperties.lambda + 1 / 2 / objectSliceList[row - 1][column][0].lambda))
					elementValues.foSouth 			= data.dt / (data.dx * data.dx * elementProperties.rho * elementProperties.cp * (1 / 2 / elementProperties.lambda + 1 / 2 / objectSliceList[row + 1][column][0].lambda))
					elementValues.foWest 			= data.dt / (data.dx * data.dx * elementProperties.rho * elementProperties.cp * (1 / 2 / elementProperties.lambda + 1 / 2 / objectSliceList[row][column - 1][0].lambda))
					elementValues.foEast 			= data.dt / (data.dx * data.dx * elementProperties.rho * elementProperties.cp * (1 / 2 / elementProperties.lambda + 1 / 2 / objectSliceList[row][column + 1][0].lambda))		
					elementValues.foAboveAndBelow 	= data.dt / (data.dx * data.dx * elementProperties.rho * elementProperties.cp * (1 / 2 / elementProperties.lambda + 1 / 2 / A.lambda))
			}

			if(elementProperties.name == 'copper') { elementValues.foAboveAndBelow = data.dt / (data.dx * data.dx * elementProperties.rho * elementProperties.cp * (1 / 2 / elementProperties.lambda + 1 / 2 / I.lambda)) }

			elementValues.stabilityValue = (1 - elementValues.foNorth - elementValues.foSouth -  elementValues.foWest - elementValues.foEast - 2 * elementValues.foAboveAndBelow)
		}
	}
}

function updateTemperatureValues() {
	for (var row = 0; row <= 16; row++) {
		for (var column = 0; column <= 16; column++) {

			elementProperties 	= objectSliceList[row][column][0]
			elementValues 		= objectSliceList[row][column][1]

			switch(elementProperties.name) {
				case 'air':
					elementValues.temperature[1] = 5 * Math.sin((1 / 86400) * data.time * 2 * Math.PI + 3)
					break;
				case 'copper':
					elementValues.temperature[1] = elementValues.stabilityValue * elementValues.temperature[0] + elementValues.foNorth * objectSliceList[row - 1][column][1].temperature[0] + elementValues.foSouth * objectSliceList[row + 1][column][1].temperature[0] + elementValues.foWest * objectSliceList[row][column - 1][1].temperature[0] + elementValues.foEast * objectSliceList[row][column + 1][1].temperature[0] + 2 * elementValues.foAboveAndBelow * objectSliceList[1][6][1].temperature[0] + data.power * data.dt / (elementProperties.rho * elementProperties.cp * data.volume)
					break;
				default:
					elementValues.temperature[1] = elementValues.stabilityValue * elementValues.temperature[0] + elementValues.foNorth * objectSliceList[row - 1][column][1].temperature[0] + elementValues.foSouth * objectSliceList[row + 1][column][1].temperature[0] + elementValues.foWest * objectSliceList[row][column - 1][1].temperature[0] + elementValues.foEast * objectSliceList[row][column + 1][1].temperature[0] + 2 * elementValues.foAboveAndBelow * objectSliceList[0][0][1].temperature[0]
			}

			elementValues.temperature[0] = elementValues.temperature[1]
			elementValues.html.innerHTML = elementValues.temperature[1].toFixed(1)
		}
	}
}

function updateTime() {
	data.time = parseFloat((data.time + data.dt).toFixed(10))
}

function updateEnergy() {
	data.consumption = data.consumption + data.power * 36 * data.dt / 3600
}

function updateTemperatureList() {
	if(data.computing == false) { return }

	//Pushing the temperature inside an array
	data.temperatureList.centerTemperature.push(objectSliceList[8][8][1].temperature[1])
	data.temperatureList.copperTemperature.push(objectSliceList[8][2][1].temperature[1])

	if(data.temperatureList.centerTemperature.length > 150) {
		data.temperatureList.centerTemperature.shift()
	}

	if(data.temperatureList.copperTemperature.length > 150) {
		data.temperatureList.copperTemperature.shift()
	}

	updateCanvasView()
}

function updateHandler() {
	if(data.computing == false) { return }

	updatePower(data.powerMode)
	setFoValues()
	updateTemperatureValues()
	updateTime()
	updateEnergy()

	updateTimeView(data.time)
	updatePowerView(data.power)
	updateEnergyView(data.consumption)
}

//Event listener for buttons
document.querySelector('#button-container .play').addEventListener('click', () => {
	data.computing = true
})

document.querySelector('#button-container .pause').addEventListener('click', () => {
	data.computing = false
})

document.querySelector('.regulation-off-mode').addEventListener('click', () => {
	data.powerMode = '0'
})

document.querySelector('.regulation-on-mode').addEventListener('click', () => {
	data.powerMode = '100'
})

document.querySelector('.regulation-on-off-mode').addEventListener('click', () => {
	data.powerMode = '0/1'
})

document.querySelector('.regulation-p-mode').addEventListener('click', () => {
	data.powerMode = 'P'
})

document.querySelector('.regulation-pi-mode').addEventListener('click', () => {
	data.powerMode = 'PI'
})

setInterval(updateHandler, data.computeTime)
setInterval(updateTemperatureList, 70)

updatePowerView(data.power)
updateTimeView(data.time)
setFoValues()
updateTemperatureValues()
updateCanvasView()

document.querySelectorAll('.matrix').forEach(matrix => setMatrixView(matrix))



