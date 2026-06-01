import Button from './Button.jsx'

export default function WhatsAppOrderButton({ product }) {
  return (
    <a
      href={product.whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="inline-block"
    >
      <Button variant="orange" className="w-full" type="button">
        WhatsApp Order
      </Button>
    </a>
  )
}

