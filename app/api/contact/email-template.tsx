import { Head, Html, Tailwind, Preview, pixelBasedPreset, Body, Container, Heading, Text, Section, Font, Img, Button, Link } from "react-email"

type EmailProps = {
  name: string,
  email: string,
  message: string,
  siteUrl: string
}

export function EmailTemplate({
  name,
  email,
  message,
  siteUrl
}: EmailProps) {

  return (
    <Tailwind
      config={{
        presets: [pixelBasedPreset],
        theme: {
          extend: {
            colors: {
              primary: "#f97316", // primary
            },
          },
        },
      }}
    >
      <Html>
        <Head>
          <title>TheDevIko Contact</title>
          <Font 
            fontFamily="Inter"
            fallbackFontFamily={["Helvetica", "Arial", "sans-serif"]}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Preview>{ `TheDevIko Contact: New Email from ${ name }` }</Preview>
        <Body>
          <Container className="border border-gray-300 rounded-md px-8 py-16 border-t-8 border-t-primary">
            <Section>
              <Link href={ siteUrl } className="w-fit text-black text-xl text-left align-middle items-center font-bold">
                <Img src={"https://stjsotihzxcnykwsmjnj.supabase.co/storage/v1/object/public/images/logo.png"} alt="logo" width="32" height="32" className="inline-block align-middle mr-1"></Img>
                <span className="align-middle">TheDevIko</span>
              </Link>
              <Heading className="my-12 text-center">TheDevIko Contact</Heading>
            </Section>
            <Section className="space-y-1">
              <Text><strong>You have received a new email</strong></Text>
              <Text>
                <strong>Name: </strong>
                { name }
                <br></br>
                <strong>Email: </strong>
                { email }
              </Text>
            </Section>
            <Section>
              <Text className="whitespace-pre-wrap">
              { message }
              </Text>
            </Section>
            <Section className="text-center align-middle mt-16">
              <Button className="bg-black px-5 py-3 rounded-md text-white" href={`mailto:${email}`}>
                Reply to {name}
              </Button>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  )
}

export default EmailTemplate;

EmailTemplate.PreviewProps = {
  name: "Iko Viado",
  email: "iko.viado.contact@gmail.com",
  message: "Hi Iko! I'd love to learn more.\n\nCan we schedule a call this week?",
  siteUrl: "localhost:3000"
} satisfies EmailProps;