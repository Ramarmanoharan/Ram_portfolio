// Formspree Contact Form
const contactForm = document.querySelector(".developer-form");

if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);

        try {
            const response = await fetch(
                "https://formspree.io/f/xdavkwyb",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        Accept: "application/json"
                    }
                }
            );

            if (response.ok) {
                alert("✅ Message sent successfully!");
                contactForm.reset();
            } else {
                alert("❌ Failed to send message!");
            }
        } catch (error) {
            alert("❌ Network error!");
            console.error(error);
        }
    });
}