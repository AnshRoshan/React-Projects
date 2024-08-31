import React, { useId } from "react";

function InputBox({
	label,
	amount,
	onAmountChange,
	onCurrencyChange,
	currencyOptions = [],
	selectCurrency = "usd",
	amountDisable = false,
	currencyDisable = false,
	className = "",
}) {
	const amountInputId = useId();

	return (
		<div
			className={`flex rounded-lg bg-black/30 p-3 text-sm md:text-md xl:text-xl ${className}`}
		>
			<div className="w-1/2">
				<label
					htmlFor={amountInputId}
					className="mb-2 inline-block text-black/40"
				>
					{label}
				</label>
				<input
					id={amountInputId}
					list="Multiple"
					className="w-full bg-transparent py-1.5 outline-none"
					type="number"
					placeholder="Amount"
					disabled={amountDisable}
					value={amount}
					onChange={(e) => onAmountChange?.(Number(e.target.value))}
				/>
				<datalist id="Multiple" className="bg-teal-800/50">
					<option value="100" className="bg-sky-800/50">
						Hunderd
					</option>
					<option value="1000">Grand</option>
					<option value="100000">Lakh</option>
					<option value="10000000">Crore</option>
					<option value="1000000000">Billion/Arab</option>
				</datalist>
			</div>
			<div className="flex w-1/2 flex-wrap justify-end text-right">
				<p className="mb-2 w-full text-black/40">Currency Type</p>
				<select
					className="cursor-pointer rounded-lg bg-gray-100 px-1 py-1 outline-none"
					value={selectCurrency}
					onChange={(e) => onCurrencyChange?.(e.target.value)}
					disabled={currencyDisable}
				>
					{currencyOptions.map((currency) => (
						<option key={currency} value={currency}>
							{currency}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}

export default InputBox;
