import React from 'react'
import globe from "../assets/images/globe.jpg"
import { Link } from 'react-router-dom';

const Overons = () => {

  return (
    <div className="w-full flex justify-center items-center flex-row">
      <div className="w-[150px] h-[750px] border-r border-black flex justify-center items-center max-calendar:hidden"></div>

      <div className="w-[full] flex flex-1 justify-center ">
        <div className="w-full flex flex-col justify-start items-center">
          <div className="w-[85%] flex flex-row pt-4">
            <span className="text-2xl font-semibold pl-4 pb-4">
              # Over het Leerhuis
            </span>
          </div>

          <div className="overons w-[85%] flex justify-center font-normal gap-12 rounded-lg max-sm:flex-col z-5 p-8">
            <div className="w-1/2 flex flex-col justify-start leading-2 text-lg max-sm:w-full">
              <span className="w-full flex justify-center font-semibold pb-2 mb-4">
                Leven in een complexe wereld
              </span>
              <p>
                Het Leerhuis Amsterdam richt zich op zinvol samen leven in een
                complexe wereld die ons voor veel vragen stelt.
                <br /> Vanuit de Bijbel en andere bronnen voor oriëntatie en de
                hedendaagse wereld van kunst en cultuur zoeken wij hierover het
                gesprek.
                <br /> We organiseren daarom bijeenkomsten, dialogen en
                cursussen, in de Muiderkerk, waarin deze werelden elkaar
                ontmoeten.
              </p>
              <br />
              {/* <p>
                Leerhuis Amsterdam nodigt je uit voor 'moedige egesprekken' met
                het oog op vragen, over hoe we met elkaar zinvol kunnen
                samenleven .<br />
                Rond de bespreking van een boek of een thema ontstaat voor een
                tijdje een gemeenschap. Daarin hebben we aandacht voor ieders
                geloof, spiritualiteit, filosofisch en levensbeschouwend
                perspectief. Verras elkaar met je leergierigheid, je vrijmoedig
                dóórvragen en soms ook met je levenservaringen, wanneer je die
                wilt delen.
                <br />
                Betekenis vinden, op ideeën komen, door ontmoeting en dialoog.
                Daar draait het om. En mogelijk heb je er ook wat aan in
                gesprekken met vrienden, familie tijdens je werk, bij je morele
                en politieke keuzes of in je geloofsgemeenschap. Zo'n zinvolle
                doorwerking van wat we met en van elkaar leren zou mooi zijn!
                <br />
                Trouwens: heb je zélf een onderwerp dat je wilt bespreken met
                anderen, laat het ons weten, dan kijken we of en wanneer het
                past.
                <br />
                We kijken naar jullie uit!
              </p> */}
              <Link to="" className="w-full flex justify-center mt-20">
                <button
                  type="button"
                  className="btn w-[150px] bg-black p-1 text-[#000] rounded-full"
                >
                  <div className="bg-black flex flex-row justify-center items-center rounded-full p-1 border-2 border-[#ef8b39] text-[#f19a53] gap-2">
                    <span>Lees meer</span>
                  </div>
                </button>
              </Link>
            </div>
            <div className="w-1/2 flex justify-center leading-2 text-md rounded-lg -z-5 object-cover">
              <img
                src={globe}
                alt="street"
                className="globe object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[150px] h-[750px] border-l border-black flex justify-center items-center max-calendar:hidden"></div>
    </div>
  );
}

export default Overons
