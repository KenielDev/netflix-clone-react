tailwind.config = {
    content: ["./index.html"],
    theme: {
        screens: {
            mbm: "375px",
            mbl: "425px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            "3xl": "2560px",
        },
        colors: {
            ...tailwind.colors,
        },
        extend: {
            fontFamily: {
                montserrat: "'Montserrat', sans-serif",
                montserratAlt: "'Montserrat Alternates', sans-serif",
            },
            animation: {
                pulse: "pulse 2s infinite",
            },
        },
    },
    plugins: [],
};