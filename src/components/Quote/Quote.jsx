import { useState, useEffect } from "react";
import "./Quote.css";

function Quote() {
    const [quote, setQuote] = useState("");
    const [quoteId, setQuoteId] = useState(null);

    // Fetch all quotes and pick a random one
    useEffect(() => {
        fetch("https://the-one-api.dev/v2/quote", {
            headers: {
                "Authorization": "Bearer 6nEG9qyMBh1ByoR_LDcw"
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data.docs && data.docs.length > 0) {
                const randomIndex = Math.floor(Math.random() * data.docs.length);
                const selectedQuote = data.docs[randomIndex];
                setQuoteId(selectedQuote._id); // Store the selected quote ID
            }
        })
        .catch(error => console.error("Error fetching quote list:", error));
    }, []);

    // Fetch quote details using the randomly selected quote ID
    useEffect(() => {
        if (!quoteId) return; // Only fetch if we have a quote ID

        fetch(`https://the-one-api.dev/v2/quote/${quoteId}`, {
            headers: {
                "Authorization": "Bearer 6nEG9qyMBh1ByoR_LDcw"
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data.docs && data.docs.length > 0) {
                setQuote(data.docs[0].dialog);
            }
        })
        .catch(error => console.error("Error fetching quote by ID:", error));
    }, [quoteId]); // Runs when quoteId is set

    return (
        <>
            <h2>{quote || "Loading quote..."}</h2>
        </>
    );
}

export default Quote;
