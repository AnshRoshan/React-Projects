import { useEffect, useState } from "react";

const CURRENCY_API =
	"https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const useCurrencyInfo = (currency) => {
	const [currencyInfo, setCurrencyInfo] = useState({});

	useEffect(() => {
		const controller = new AbortController();

		fetch(`${CURRENCY_API}/${currency}.json`, { signal: controller.signal })
			.then((res) => res.json())
			.then((data) => setCurrencyInfo(data[currency] ?? {}))
			.catch((err) => {
				if (err.name !== "AbortError") {
					console.error(`Unable to load ${currency} rates:`, err);
				}
			});

		return () => controller.abort();
	}, [currency]);

	return currencyInfo;
};

export default useCurrencyInfo;
