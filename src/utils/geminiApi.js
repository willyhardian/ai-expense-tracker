import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function processReceiptImage(file) {
    // const base64 = await toBase64(file);
    // const base64Data = base64.replace(/^data:.+;base64,/, "");

    // const contents = [
    //     {
    //         inlineData: {
    //             mimeType: file.type,
    //             data: base64Data,
    //         },
    //     },
    //     {
    //         text: `Extract the following details from this receipt image:
    //         - Store name
    //         - Date of purchase
    //         - List of items with:
    //             - Name
    //             - Quantity
    //             - Price per item
    //             - Discount (if any)
    //         - Subtotal
    //         - Tax (e.g., PPN 10%)
    //         - Total amount paid

    //         Format your response as structured JSON like this:
    //         {
    //         "store": "Example Store",
    //         "date": "YYYY-MM-DD",
    //         "items": [
    //             {
    //             "name": "Item A",
    //             "qty": 2,
    //             "price": 10000,
    //             "discount": 500
    //             },
    //             {
    //             "name": "Item B",
    //             "qty": 1,
    //             "price": 20000,
    //             "discount": 0
    //             }
    //         ],
    //         "subtotal": 39500,
    //         "tax": 3950,
    //         "total": 43450
    //         }
    //         `,
    //     },
    // ];

    try {
        //     const result = await ai.models.generateContent({
        //         model: "gemini-1.5-flash",
        //         contents,
        //     });

        //     const rawText = result.text;
        //     console.log(rawText, "rawText nih <<<<");

        //     const cleanedText = rawText
        //         .replace(/```json\n?/, "")
        //         .replace(/```/, "")
        //         .trim();
        const cleanedText = `{
            "store": "Indomaret",
            "date": "2018-06-16",
            "items": [
              {
                "name": "ABC ORANGE 525ML",
                "qty": 1,
                "price": 13500,
                "discount": 0
              },
              {
                "name": "I/F BISC.WNDRLND 300",
                "qty": 1,
                "price": 20900,
                "discount": 0
              },
              {
                "name": "LEXUS SANDW COKL 190",
                "qty": 1,
                "price": 26800,
                "discount": 0
              },
              {
                "name": "LUWAK WHT ORGL 20X20",
                "qty": 1,
                "price": 25400,
                "discount": 0
              },
              {
                "name": "OREO CHO & VAN 2X137",
                "qty": 1,
                "price": 19800,
                "discount": 0
              },
              {
                "name": "TONG TJI JASM T/A.25",
                "qty": 1,
                "price": 9300,
                "discount": 0
              },
              {
                "name": "KOPIKO 78C 240ML",
                "qty": 2,
                "price": 5500,
                "discount": 0
              },
              {
                "name": "FRSTEA TEH MADU 350",
                "qty": 1,
                "price": 3950,
                "discount": 0
              },
              {
                "name": "SOVIA M/GORENG 2L",
                "qty": 1,
                "price": 26950,
                "discount": 0
              }
            ],
            "subtotal": 130650,
            "tax": null,
            "total": 130650
        }`;
        const cleanedTextParsed = JSON.parse(cleanedText);
        const output = [
            { name: cleanedTextParsed.store, price: cleanedTextParsed.total },
        ];
        return output;
    } catch (err) {
        console.error("❌ Error processing receipt:", err);
        return {
            store: "",
            date: "",
            items: [],
            total: 0,
        };
    }
}

function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
