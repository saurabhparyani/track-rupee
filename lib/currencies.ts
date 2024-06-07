export const Currencies = [
    {value: "INR", label: "₹ Indian Rupee", locale: "en-IN"},
    {value: "USD", label: "$ US Dollar", locale: "en-US"},
    {value: "JPY", label: "¥ Yen", locale: "ja-JP"},
    {value: "GBP", label: "£ Pound", locale: "en-GB"}

]

export type Currency = (typeof Currencies)[0]