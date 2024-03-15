import { useState } from 'react'
import { Input } from './components'
import useCurrencyInformation from './hooks/useCurrencyInformation'
function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('npr')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState('')

  const currencyInfo = useCurrencyInformation(from)

  const options = Object.keys(currencyInfo)

  const currencyData = {

  }
  console.log(currencyData)

  for (const [key, value] of Object.entries(currencyInfo)) {
    if (key === 'usd' || key === 'inr' || key === 'eur' || key === 'cad') {
      currencyData[key] = value;
    }
  }


  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  
  const BackgroundImage = "../src/assets/background-image.jpg"
  return (
    <div
      className="w-full lg:h-screen flex flex-wrap lg: bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <div className='w-full text-center text-2xl md:text-3xl lg:text-3xl  max-w-md md:mx-auto border lg:-mb-20 mt-5 mx-5 border-gray-60 h-20 rounded-lg p-5 backdrop-blur-sm bg-white/30 '>
        Currency Converter
      </div>
      <div className="w-full lg:flex lg:justify-evenly mt-5 ml-5 mr-5">
        <div className="w-full max-w-md md:mx-auto border mb-5 border-gray-60 h-72 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()

            }}
          >
            <div className="w-full mb-1">
              <Input
                label="From"
                amount={amount}
                currOptions={options}
                onCurrChange={(currency) => setFrom(currency)}
                selectCurr={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Input
                label="To"
                amount={convertedAmount}
                currOptions={options}
                onCurrChange={(currency) => setTo(currency)}
                selectCurr={from ? to : 'inr'}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from} to {to}
            </button>
          </form>
        </div>
        <div className='w-full  max-w-md md:mx-auto border mb-5 border-gray-60 h-72 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <h1 className='text-center text-xl pb-3'>Currency Conversion rate</h1>
          <table className='text-center border-collapse border border-gray-600 mx-auto'>
            <thead >
              <tr className='border-b border-gray-600'>
                <th className='border-r border-gray-600 px-4 py-2'>Currency</th>
                <th className='px-4 py-2'>Rate</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(currencyData).map(([currency, rate]) => (
                <tr className='border-b border-gray-600' key={currency}>
                  <td className='border-r border-gray-600 px-4 py-2'>{currency}</td>
                  <td className='px-4 py-2'>{rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App
