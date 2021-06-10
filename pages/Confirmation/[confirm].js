import Head from 'next/head'
import Confirmation from './../../Components/Confirmation/Confirmation';


//you can get to the Confirmation page through the url /Confirmation/confirm

export default function ConfirmPage() {
  return (
    <div >
      <Head>
        <title>Confirm Your Request</title>
      </Head>
      <body>
      <Confirmation/>
      </body>
      </div>
  )
}
