module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false,
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        a: {
                            color: "#3172ce",
                            "&:hover": {
                                color: "#2x5282",
                            },
                        },
                    },
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
}