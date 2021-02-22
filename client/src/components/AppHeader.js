import { Header, Image } from "semantic-ui-react";

function AppHeader(){


    return(
        <>
         <Header className="recipeHeader" textAlign="center"  as='h2'>
          <Image circular src='https://www.themealdb.com/images/media/meals/n41ny81608588066.jpg' /> Recipe Raider
        </Header>
        </>
    )


}



export default AppHeader;