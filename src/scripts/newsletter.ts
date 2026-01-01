document.addEventListener("astro:page-load", () => {

    const form = document.getElementById("Form");

    function validateEmail(email: string) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    form?.addEventListener("submit", (event) => {

        event.preventDefault();

        const formData = new FormData(form);

        if (formData) {

            let email = formData.get("email");

            if (typeof email !== "string") {form.classList.add("form-error"); return};

            let isValidEmail = validateEmail(email);

            form.classList.toggle("form-succes", isValidEmail);

            form.classList.toggle("form-error", !isValidEmail);

        }
    })
});


