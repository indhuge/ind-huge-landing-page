import { NextApiResponse } from "next";

export async function POST(req: Request, res: Response, nextres: NextApiResponse) {
    const d = new Date();

    var { nome, telefone, email, mensagem, newsletter, cookie }: { nome: string, telefone: string, email: string, mensagem: string, newsletter: boolean, cookie: string } = await req.json()

    // console.log(nome, telefone, email, mensagem, newsletter, cookie);

    var form = {
        "submittedAt": d.getTime(), // This millisecond timestamp is optional. Update the value from "1517927174000" to avoid an INVALID_TIMESTAMP error.
        "fields": [
            {
                "objectTypeId": "0-1",
                "name": "firstname",
                "value": nome
            },
            {
                "objectTypeId": "0-1",
                "name": "phone",
                "value": telefone
            },
            {
                "objectTypeId": "0-1",
                "name": "email",
                "value": email
            },
            {
                "objectTypeId": "0-1",
                "name": "message",
                "value": mensagem
            },
            {
                "objectTypeId": "0-1",
                "name": "newsletter",
                "value": newsletter
            },

        ],
        "context": {
            "hutk": cookie, // include this parameter and set it to the hubspotutk cookie value to enable cookie tracking on your submission
            "pageUri": "www.indhuge.com",
            "pageName": "Landing Page"
        },
        "legalConsentOptions": {
            "consent": { // Include this object when GDPR options are enabled
                "consentToProcess": true,
                "text": "I agree to allow indhuge to store and process my personal data.",
                "communications": [
                    {
                        "value": true,
                        "subscriptionTypeId": 999,
                        "text": "I agree to receive marketing communications from Example Company."
                    }
                ]
            }
        }
    }

    // console.log(nome, telefone, email, mensagem, newsletter, cookie)

    var jsondados = await JSON.stringify(form)
    //console.log(jsondados);
    fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTALID}/${process.env.HUBSPOT_FORMGUID}`, {
        headers: { 'Content-Type': 'application/json' },
        body: jsondados,
        method: 'POST'
    }).then(()=>nextres.status(200)).catch((err) => console.log(err))
}