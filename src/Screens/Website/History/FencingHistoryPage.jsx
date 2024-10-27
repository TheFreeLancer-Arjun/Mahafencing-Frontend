import { Link } from "react-router-dom"; 
import React from "react";

const FencingHistoryPage = () => {
 

  return (
    <div className="bg-yellow-50 anime">
      <div className="w-screen flex gap-2 justify-center items-center p-5">
      <Link
          className="  rounded-lg text-black hover:bg-green-400 px-10 lg:text-lg xs:text-sm font-bold border py-4 border-b-[3px] border-r-[3px] border-green-400 rounded-t-xl  "
          to="/history/fencing"
        >
          Fencing History
        </Link>
        <Link
          className="  rounded-lg text-black hover:bg-green-400 px-10 lg:text-lg xs:text-sm font-bold border py-4 border-b-[3px] border-r-[3px] border-green-400 rounded-t-xl  "
          to="/history/fai"
        >
          FAI History
        </Link>
        <Link
          className="brounded-lg text-black hover:bg-green-400 px-10 lg:text-lg xs:text-sm font-bold border py-4 border-b-[3px] border-r-[3px] border-green-400 rounded-t-xl  " 
          to="/history/mfa"
        >
          MFA History
        </Link>
      </div>

      <div className="w-full px-4 lg:px-32 py-20 bg-yellow-50">
        <h1
          style={{ fontWeight: "900", fontFamily: "DynaPuff" }}
          className="text-2xl lg:text-5xl text-start mt-4 mb-4 font-bold uppercase"
        >
          Fencing History
        </h1>
        <div className="p-2 border-t-[15px] border-r-[15px] rounded-2xl border-[#06B4DB] flex flex-col lg:flex-row">
          <div className="rounded-lg leading-relaxed  w-full">
            <div className="anime w-full p-5">
              <div className="anime text-black mt-3 lg:mt-7 text-sm lg:text-xl">
                <p className="mb-4 font-bold">
                  "Whether we consider fencing as an art of enjoyment or as a
                  science of arms, a method of education or a sport, its wealth
                  emerges from its study. Wealth of a thousand-year-old history,
                  of a large technical skill and a laudatory record of
                  achievements, wealth of champions and masters who force the
                  respect, and above all wealth of values that fencing knew how
                  to generate and that it still tries to inculcate today through
                  its practice. The history of this sport is very eloquent, it
                  often relates that of humankind through that of the sword and,
                  if we analyse the feature of the art of weapons, we
                  immediately notice that it corresponds to the customs of the
                  era in which it appears. The human being has always tried to
                  invent weapons to defend himself against the nature and other
                  human beings, and this si nce Caïn: he used his strength,
                  resorted to his material, improved his dexterity and used his
                  intelligence. The history of fencing gives a marvellous
                  account of all that."
                </p>
                <p className="mb-4 font-bold">
                  "The Pharaohs invent the mask and the competition Four
                  centuries before the Olympic Games of Antique Greece, a
                  bas-relief in the temple of Medinet-About in High Egypt and
                  built by Ramsès III in 1190 BC, depicts a sporting competition
                  organised by the Pharaoh to celebrate his victory over the
                  Libyans. The weapons - certainly sticks with bronze plates in
                  the end - are buttoned. Hands are protected by a guard similar
                  to that of sabre, and some of the fencers have the face
                  protected by a mask, whose chin rolling pad, covering both
                  ears, is attached to the wig. The non-sword arm is used for
                  parrying blows and is protected by a kind of shield. The
                  translation of hieroglyphs teaches us that the opponents
                  shouted at each other « On guard … and admire what my valiant
                  hand is going to make! », and that spectators did not spare
                  encouragements for their favourites: « Go ! O excellent
                  fighter! ». The winner salutes with his weapon and hand the
                  Pharaoh who is accompanied by his suite. The public is
                  composed of Assyrians, Libyans and Egyptians; the jury and the
                  organisers are recognizable thanks to their feather. A scribe
                  notes on a papyrus the results of the competition."
                </p>

                <img src="http://mahafencing.in/assets/img/olympe.png" alt="" />
                <p className="mb-4 font-bold">
                  "The Games of the Olympe Responsive imageIt is necessary to
                  cross ages and transport ourselves in Greece to find in the
                  hoplomachie (fight with weapons one to one) the tracks of a
                  competition where prizes were proposed to the winners, « grown
                  men or children ». Many of us know that fencing was included
                  in the programme of the first games of the new era, in 1896,
                  but many ignore that it was certainly included in the first
                  Olympic Games in 776 BC.Sensitive to the equal education of
                  the body and the soul of their youth, the Greeks honoured all
                  the games preparing to the profession of arms. Olympic combats
                  in which athletes (word derived from the Greek « combat ») had
                  to be Greek, free and beyond reproach. If the first laurels
                  awarded during these events are regrettably unknown to us, we
                  can learn from the Dictionary of Greek and Roman Antiques, 3
                  that in the IIIrd century, in Teos, in Greece, the
                  «hoplomachès» (fencing master) was paid 300 drachmas: much
                  more than the archery master or javelin master. This book
                  evokes, in the 5th century, two masters with a great
                  reputation (Euthydème and Dyonysodore) who taught the
                  hoplomachie (fencing) in return for a great reward"
                </p>
                <img src="http://mahafencing.in/assets/img/roman.png" alt="" />
                <p className="mb-4 font-bold">
                  "Thrusting fencing of the Romans Responsive image In the XII
                  th and XIIIth centuries, we already meet in France « givers of
                  lessons » and advice in fencing, whose function was to prepare
                  to the judicial duel and, sometimes, against very high sum,
                  replace on the spot the parties in presence. There were the
                  counsels of arms, who became the « bravi » of Lombardie and
                  the swordplayer and maistres.The judicial duels took place
                  until the XVI th century. The truth and the right cause could
                  only triumph in these « God judgements » in which sword ruled
                  and divided the truth from the false ;the faith, for which the
                  glory was only vanity, could only praise the value through the
                  filter of a highly moral purpose. Further some miscarriages of
                  justice in which «God’s hand» had less weight than the power
                  of fencing, the ordeal (from the old English ordal and German
                  urthel) was finally suppressed and replaced by a more human
                  justice. The fact remains that the symbols of sword and
                  justice crossed the centuries and are still today associated,
                  imbuing fencing with a strong ethics."
                </p>
                <img src="http://mahafencing.in/assets/img/court.png" alt="" />
                <p className="mb-4 font-bold">
                  "Rebirth of fencing, a talent of court Responsive image
                  Thrusting fencing, which according to Vegèce allowed the
                  successes of the Roman soldiers, is almost non-existent in the
                  Middle Ages, because the only law is then that of the
                  strongest, in combats where the mace, the battle- axe, the
                  halberd or the two-handed sword could not match with the
                  subtlety of thrusting fencing.Nevertheless, this technique
                  returns in the XVI th century.Armors disappear, because the «
                  thunder of the earth », the gunpowder, made them obsolete.For
                  that reason the weapons are modified, swords slowly become a
                  wardrobe accessory : they are not necessarily shorter, but
                  their centre of gravity is returned towards the hand, they are
                  henceforth lighter and held by a single hand. The Italian and
                  Spanish methods spread through France, advocating the
                  superiority of the hit with the point and clarifying the
                  various techniques of attack and defence. The counsels of
                  arms, the swordplayer and maistres taught first the defensive,
                  which consisted in keeping the opponent at distance (the «
                  misura » or measure), avoiding strikes or « parrying » the
                  opponent-attack. The second concern was the search of « time
                  », the convenient moment to attack, in measure, and out of the
                  opponent’s time. Because of the lightering of weapons and
                  their grip in one hand, one arm will be affected to the
                  defensive. In the beginning, this arm was armed with a shield
                  or a broquel, with the brachium or with the rondache, then
                  with a dagger, or even with a rolled coat. The perfection of
                  weapons at the level of the guard will then allow to bring
                  together in a single weapon, the offensive and the defensive;
                  some people see there the real birth of fencing. So, we shall
                  see complicated, tormented guard, in which the opposite blade
                  had to get lost, jam or break itself. Finally, appears the
                  rapier, or brette (long sword), with deep coquille, allowing a
                  good sheltering of the hand. Its use, combined with the
                  dagger, will increase the defensive and offensive potential,
                  while making the attack safer."
                </p>
                <img src="http://mahafencing.in/assets/img/foil.png" alt="" />
                <p className="mb-4 font-bold">
                  "Progress and development of fencing Responsive image The
                  classification of actions, the definition of terms and the
                  teaching methods were progressively established by French
                  masters, who left remarkable writings : Le Perche du Coudray
                  (fencing master of Cyrano) in 1635 and 1676, Besnard in 1653
                  (master of Descartes), la Touche in 1670, Labat from Toulouse
                  in 1690. The fencing phrase was actually created with the
                  appearance of the mask with metal mesh (replacing those made
                  of white iron with openings),about which Girard speaks already
                  in 1736, and which allowed the remises, the stop hits, the
                  redoublings and counter-ripostes. La Boëssière (father)
                  demonstrated its importance and imposed it.The masters Danet
                  (1766) and La Boëssière (1766) brought their style to the
                  elaboration of a French method which is both revolutionary and
                  conventional. Conventional because its practice was more and
                  more codified and regulated. Revolutionary because of its
                  technique but above all because the Revol ution had changed
                  the mentalities. The nobility, or what remained from it, was
                  not anymore the only one interested in 11 handling the sword
                  and being able to do it ; the middle-class, the writers
                  frequented more and more the fencing school and the « pré aux
                  clercs ». Freedom was progressing on each side of the grip.
                  Modern fencing was really born at the beginning of the XIX th
                  century and was consecrated by the romanticism thanks to
                  masters such as Lafaugère (1815), Gomard (1845), Grisier
                  (1867), Cordelois (1872), or Bertrand, incomparable fencer and
                  outstanding demonstrator, who modified the guard, improved the
                  riposte, established the rules for the time, stop hits,
                  remises and redoublings."
                </p>
                <img
                  src="http://mahafencing.in/assets/img/progress.png"
                  alt=""
                />
                <p className="mb-4 font-bold">
                  "Fencing, an art of sport Responsive image The end of the XIX
                  th century seals the evolution of the trinity of weapons -
                  epee, sabre and foil - but not necessarily their cohabitation.
                  Between « art » and « sport », it will soon be necessary to
                  choose. If fencing became a sport, it is partially thanks to
                  epee. This weapon being by definition the weapon of duel, it
                  had to be taught in schools and, with it, the realism begins
                  to prevail over the romanticism.It is around 1890 that we
                  begin to speak about fencing as a sport. Revolutionaries
                  suggest to « judge» the bouts and count the hits of
                  button.What a revolution ! Was loyalty not the first rule of
                  the bout ? We do not use yet the word « match » but « blank
                  duel », with a judge and four witnesses, but the score was
                  less important than the manner and relative speed of the
                  strikes. Italian and French fencing are still and always
                  quarrelling for the glory of weapons at epee and foil, sometim
                  es unbuttoned, while sabre takes already the direction of
                  East. Little by little, the sport gets organized and the
                  competitions appear. The famous bout at foil between Louis
                  Mérignac and Eugénio Pini was held in April 1891 and was «
                  unofficially » won by Mérignac, named as the Big Boss. In 1892
                  takes place the first school championship at foil, by direct
                  elimination in one hit, except for the final, during which
                  Bétoland won against J.-J. Renaud by 4 to 3. In 1895, the
                  newspaper « French Fencing » organised a tournament upon
                  invitations between four Italians and four Frenchmen. The
                  result was not that important but it was nevertheless very
                  controversial. In 1896, foil and sabre are part of the Olympic
                  Games of Athens, epee will appear in those of Paris, in 1900,
                  and team events in 1908. Women’s foil is only introduced in
                  1924 while women’s epee will wait until 1996 and women’s sabre
                  the 21 st century. The international tournament of 1905 will
                  apply the rule of the validity of hits to the not extended
                  sword -arm but, more than the validity of hits, their
                  materiality began seriously to concern the referees. It was
                  necessary to wait until 1931 to see the experimentation of the
                  first electric control apparatus. Since 1955, the fencing
                  phrase at foil can be electrically controlled thanks to the
                  Milanese Carmina, the one of sabre will wait until the last
                  decade of the 20 th century. Fencing was always closed to the
                  technological progresses, even if it takes long sometimes to
                  see them and accept them."
                </p>
                <img src="http://mahafencing.in/assets/img/sport.png" alt="" />
                <p className="mb-4 font-bold">
                  "Fencing, an art of enjoyment Responsive image The XIX th
                  century was an extraordinary century - the golden age - for
                  fencing, that nothing comes to oppose : the light and
                  well-balanced weapons allow the execution of technical exploit
                  safely, fencing masters, at the top of their science,
                  sometimes of their genius, transmit and codify the art of «
                  beautiful and fine foil ». They will be at the source of the
                  tremendous influence of French and Italian fencing. The civil
                  and military fencing schools multiply, the followers rush and
                  develop a passion for this fashionable physical activity.But
                  fencing, also qualified as a mind game, will only become a
                  sport at the end of this century. For the purists, it is just
                  an enjoyment in which « the way of hitting is better than what
                  we give ». Foil is king on the piste,sometimes even on the «
                  ground » where the «sense of honour» (the duel), more
                  democratised, is still very present."
                </p>
                <img
                  src="http://mahafencing.in/assets/img/enjoyment.png"
                  alt=""
                />
                <p className="mb-4 font-bold">
                  "International Fencing Federation Responsive image Further to
                  the problems raised during the Olympic Games of 1908
                  (suppression of foil because of regulations) and of 1912 which
                  led to the boycott of France at the Games of Stockholm, it is
                  on René Lacroix's initiative, on 29 November 1913, in the
                  lounges of the Automobile Club of France, that the FIE was
                  created and that it adopted the 1st rules at epee (drafted by
                  the marquis of Chasseloup-Laubat from France), at foil
                  (drafted by the master Camille Prévost, from France as well),
                  and at sabre (drafted by the Hungarian Bela Nagy).Fencing
                  opens towards European and Olympic jousts with very precise
                  rules. Since this historical date, these rules were subject to
                  some modifications and improvements : the materials, the
                  armaments and equipments which always trend towards a better
                  safety and reliability, the rules of competitions which
                  structure the values, the time and the behaviour. The FIE
                  head-office is in Lausanne"
                </p>
                <img src="http://mahafencing.in/assets/img/ifa.png" alt="" />
                <p className="mb-4 font-bold">
                  "The signalisation of hits Responsive image At the end of the
                  XIX th century, we still rely on the « word of honour » of
                  fencers to count the hits. Then appeared the famous push
                  button, which were welded at the end of the epee and partially
                  recovered with a sticky thread. The remaining point had to
                  hang to the jacket of the opponent but without crossing it …
                  what often happened. At the beginning of the 20s, the novelist
                  Léon Sazie invented the push button at three branches, which
                  was used for a long time in schools because it was practical
                  and harmless.Other inventions appeared to disappear
                  immediately, following the example of stamping or detonating
                  buttons. We imagined even to fence bare-chested, with the push
                  button. This going back to the stop hit « to the first blood »
                  gave concerns to more than one and worried the others. A big
                  progress was then made by Paul Souzy with his « record player
                  epee », composed of a box, a body wire and an epee. It
                  signalised the hits with a battery-operated snorer and an
                  electric light bulb, and marked in cochineal the place of the
                  impact. We know the continuation : the electric apparatus of
                  signalisation of hits was adopted by the federation in 1936.
                  Historical achieved by Master Gérard Six"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FencingHistoryPage;
