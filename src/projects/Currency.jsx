import { useState } from "react";
import InputBox from "../components/InputBox";
import useCurrencyInfo from "../hooks/useCurrencyInfo";
export default function Currency() {
	const [amount, setAmount] = useState(0);
	const [from, setFrom] = useState("usd");
	const [to, setTo] = useState("inr");
	const [convertedAmount, setConvertedAmount] = useState(0);
	console.log("amount", amount);
	console.log("from", from);
	console.log("to", to);
	const currencyInfo = useCurrencyInfo(from);

	const options = Object.keys(currencyInfo);

	const swap = () => {
		setFrom(to);
		setTo(from);
		setConvertedAmount(amount);
		setAmount(convertedAmount);
	};

	const convert = () => {
		setConvertedAmount(amount * currencyInfo[to]);
	};

	return (
		<div className="flex h-screen w-full flex-wrap items-center justify-center bg-gradient-to-r from-yellow-300 to-red-300">
			<div className="w-full lg:text-xl xl:text-2xl">
				<div className="mx-auto w-full max-w-xl rounded-lg border border-gray-60 bg-white/30 p-5 backdrop-blur-sm xl:max-w-5xl">
					<form
						onSubmit={(e) => {
							e.preventDefault();
							convert();
						}}
					>
						<div className="mb-1 w-full ">
							<InputBox
								label="From"
								amount={amount}
								currencyOptions={options}
								onCurrencyChange={(currency) => setFrom(currency)}
								selectCurrency={from}
								onAmountChange={(amount) => setAmount(amount)}
							/>
						</div>
						<div className="relative h-3 w-full">
							<button
								type="button"
								className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-md border-2 border-white bg-blue-600 px-2 py-0.5 text-white"
								onClick={swap}
							>
								swap
							</button>
						</div>
						<div className="mt-1 mb-4 w-full">
							<InputBox
								label="To"
								amount={convertedAmount}
								currencyOptions={options}
								onCurrencyChange={(currency) => setTo(currency)}
								selectCurrency={to}
								amountDisable
							/>
						</div>
						<button
							type="submit"
							className="w-full rounded-lg bg-blue-600 px-4 py-3 text-white"
						>
							Convert {from.toUpperCase()} to {to.toUpperCase()}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
