import React from 'react';
import AdditionalInformation from "./AdditionalInformation";
import Gallery from "./Gallery";
import {Cards8} from "./Cards8";
import {Cards5} from "./Cards5";
import Card1Layout from "./Card1Layout";
import PreFooter from "./PreFooter";

function Main({cards8, cardsPlants, cardsShoes}) {

    return(
        <>
            <AdditionalInformation/>
            <Gallery
                title="Our accessory for ladies"
                info="Creating Remarkable ladies bags Prints in 2 Colors Combination"/>
            <Cards8 cards={cards8}/>
            <Gallery
                header="STYLERS PHILOSOPHY"
                title="Simplicity & perfection"
                info="The punk and cheeky version of the iconic “chaîne d’ancre” link is an ode to the wonders of time.
                      Prepare to be hooked."
                link="Tear and create"/>
            <Card1Layout link={'https://www.celebskart.com/wp-content/uploads/2020/06/cobie-smulders-black-and-white-photoshoot-in-emmy-magazine-may-2020-01-768x997.jpg'}/>
            <Gallery
                title="Best Women Shoes Collection"
                info="A narcissistic robot ​infiltrated our ​collections."
                link="Follow it’s tracks"/>
            <Cards5 cards={cardsShoes}    />

            <Gallery
                header="JEWELRY"
                title="Types Of Cosmetics"
                info="Having Your Breasts Reduced With Breast Augmentation"
                link="Tear and create"/>
            <Card1Layout link={'https://www.travelfashiongirl.com/wp-content/uploads/2017/04/essentials-for-a-capsule-makeup-collection-cover-2.jpg'} />
            <Gallery
                title="Beautiful Plants for Decoration"
                info="Beautiful Plants for Decoration"
                link="Follow it’s tracks"/>
            <Cards5 cards={cardsPlants}    />
            <Gallery
                header="COSMETICS"
                title="Cosmetics Accessories"
                info="More and more people are opting to live the herbal life:
                      moving away from chemicals and scientific medicines,
                      and taking traditional herbs to do everything from losing weight to relieving pain.
                      They are awesome"
                link="Tear and create"/>
            <Card1Layout link={'https://en.freejpg.com.ar/asset/900/bd/bd76/F100011451.jpg'} />
            <PreFooter/>
        </>
    )
}

export default Main;