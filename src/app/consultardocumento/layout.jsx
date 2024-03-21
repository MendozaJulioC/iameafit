
import Aside from "../../components/Navs/AsideMain"
import Nav from "../../components/Navs/Navs"
import Link from "next/link";
import { getServerSession  } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/route'



export const metadata ={
    title:"IAM"
  }

  
const DateoLayout = async ({children}) => {
  const session = await getServerSession(authOptions)
  let imageavatar='';
  if (!session) {
    redirect('/login?callbackUrl=/imccv')
  }
  if(!session?.user?.image){
    imageavatar = 'https://cdnwordpresstest-f0ekdgevcngegudb.z01.azurefd.net/es/wp-content/themes/theme_alcaldia/logos/logo_footer.png'
  }else{  imageavatar = session.user.image }



  return (
    <div className=" mt-3">
      <Nav
        usuario={session?.user?.name}
        email={session?.user?.email}
        avatar={imageavatar}
      />

<Aside/>
      {children}
    </div>
  );
}

export default DateoLayout