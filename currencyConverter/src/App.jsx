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
  const BackgroundImage = `https://images.pexels.com/photos/220887/pexels-photo-220887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
  return (
    <div
      className="w-full h-screen flex flex-wrap bg-cover  bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
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
      </div>
    </div>
  )
}

export default App
