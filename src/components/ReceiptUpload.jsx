import { useState } from "react";
import { processReceiptImage } from "../utils/geminiApi";

export default function ReceiptUpload({ onExtract }) {
    const [loading, setLoading] = useState(false);

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setLoading(true);
        const items = await processReceiptImage(file);
        items.forEach(onExtract);
        setLoading(false);
    };

    return (
        <div className="mb-4">
            <label className="block mb-2 font-medium">
                Upload Receipt Image
            </label>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {loading && <p>⏳ Processing receipt...</p>}
        </div>
    );
}
