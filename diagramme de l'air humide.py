"""First we import libraries"""
import numpy as np
import matplotlib.pyplot as pyplot

"""Here are our main variables"""
plotInterval = {'xMin': 0, 'xMax': 30, 'yMin': 0, 'yMax': 0.025}
divisionNbr = 200
P = 101325
rV = 461.24
Ca = 1.006
Cv = 1.83
A = 2501
delta = 0.622

"""We design the plot window"""
pyplot.title('Diagramme de l\'air humide - P: 101 325 Pa - Alt: 0m')
pyplot.xlim(plotInterval['xMin'], plotInterval['xMax'])
pyplot.ylim(plotInterval['yMin'], plotInterval['yMax'])
pyplot.xlabel('Température [°C]')
pyplot.ylabel('Humidité spécifique [kgeau/kgas]')

#A simple function to solve f(x) - g(x) = 0
def solve(f):
    xMin = plotInterval['xMin'] - 5
    xMax = plotInterval['xMax']
    precision = 0.001
    delta = 1

    while delta > precision:
        m = xMin + (xMax - xMin) / 2
        delta = abs(xMax - xMin)
        if f(m) == 0:
            return m
        elif f(xMin) * f(m) > 0:
            xMin = m
        else:
            xMax = m
    return m

"""We plot each function"""

def cuttingCurve(x, inverseFunction = False):
    if inverseFunction == False:
        return (delta * 10 ** ((7.625 * x / (241 + x)) + 2.7877)) / (P - (10 ** ((7.625 * x / (241 + x)) + 2.7877)))
    else:
        #A simple inverse function : f(y) - > x
        return 241 / ((7.625 / ((np.log10(x * P / (x + delta))) - 2.7877)) - 1)

#Firstly we plot the temperatures
i = 0
while i < plotInterval['xMax']:
    yMax = cuttingCurve(i)
    pyplot.plot([i, i], [plotInterval['yMin'], yMax], 'y', linewidth=0.5)   
    i = i + 1

#Then Hs lines
i = 0
while i < plotInterval['yMax']:
    if i == 0:
        #Avoid divid by zero error
        xMin = cuttingCurve(0.0001, True)
    else:
        xMin = cuttingCurve(i, True)
    pyplot.plot([xMin, plotInterval['xMax']], [i, i], 'y', linewidth=0.5)   
    i = i + 0.001

#Specific Volume
fixedValues = [0.78, 0.79, 0.8, 0.81, 0.82, 0.83, 0.84, 0.85, 0.86, 0.87, 0.88, 0.89, 0.9]
for value in fixedValues:
    #This equation is used in order to cut functions using the Hr function 
    xMin = solve(lambda z: (P * value - rV * (z + 273.75) * delta) / (rV * (z + 273.15)) - (delta * 10 ** ((7.625 * z / (241 + z)) + 2.7877)) / (P - (10 ** ((7.625 * z / (241 + z)) + 2.7877))))
    x = np.linspace(xMin, plotInterval['xMax'], divisionNbr)

    #Here is the basic function for the specific volume
    function = (P * value - rV * (x + 273.75) * delta) / (rV * (x + 273.15))

    if value == fixedValues[0]:
        pyplot.plot(x, function, 'b', label='Volume spécifique [m3/kgas]', linewidth=1)
    else:
        pyplot.plot(x, function, 'b', linewidth=1)

#Enthalpy
fixedValues = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90]
pyplot.plot([0, 25], [0.005, 0.025], 'r', linewidth = 1)
for value in fixedValues:
    #This equation is used in order to cut functions using the Hr function 
    xMin = solve(lambda z: ((value - z * Ca) / (A + Cv * z) - (((0.025 - 0.005) / 25) * z + 0.005)))
    x = np.linspace(xMin, plotInterval['xMax'], divisionNbr)

    function = (value - x * Ca) / (A + Cv * x)

    if value == fixedValues[0]:
        pyplot.plot(x, function, 'r', label='Enthalpie spécifique [kJ/kgas]', linewidth=1)
    else:
        pyplot.plot(x, function, 'r', linewidth=1)
    
    #Then we can add some text
    if value > 10 and value < 90:
        pyplot.text(xMin - 1, ((value - xMin * Ca) / (A + Cv * xMin)) + 0.0001, value, fontsize=8, color='r')

#Hr
fixedValues = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
x = np.linspace(plotInterval['xMin'], plotInterval['xMax'], divisionNbr)
for value in fixedValues:
    function = (value * delta * 10 ** ((7.625 * x / (241 + x)) + 2.7877)) / (P - (value * 10 ** ((7.625 * x / (241 + x)) + 2.7877)))

    if value == fixedValues[0]:
        pyplot.plot(x, function, 'g', label='Humidité relative [%]', linewidth=1)
    else:
        pyplot.plot(x, function, 'g', linewidth=1)

"Finally we plot the diagram"
pyplot.legend()
pyplot.show()