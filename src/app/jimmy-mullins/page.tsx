import ContentPage from '../components/Page';
import Image from '../components/Image';

export default function Page() {
    return <>
        <ContentPage id="jimmyMullins" title="Jimmy Mullins">
        <Image
            src="/jimmyArmyHat.png"
            alt="Jimmy Mullins"
            caption="Jimmy Mullins, 1913 - 2002"
            float="left"
            width={300}
            height={24}
          /> 
          <p><span style={{ color: '#052003' }} className="font-bold">Jimmy Mullins was born in Clonmel in Co. Tipperary on 4 December 1913 to John and Johanna Mullins n&#233;e Donegan.</span></p>
          <Image
            src="/jimmyKittyTriciaMullins.png"
            alt="Jimmy Mullins with family in Glenconnor"
            caption="Jimmy Mullins with his wife Kitty and daughter Tricia at his family home in Glenconnor in Clonmel in the 1930s"
            float="right"
            width={300}
            height={24}
          /> 
          
          <p>At a young age, Jimmy emigrated to London, where he met and married his wife, Kitty Holles, in 1936.  After the outbreak of the Second World War in 1939, Jimmy enlisted in the army around 1941 or 1942.  He spent time in the Royal Army Service Corp and then later in the British Overseas Army on the Rhine.  He served as a lorry driver in both Belgium and the Rhineland.</p>
 
          <Image
            src="/jimmyMullins.png"
            alt="Jimmy Mullins in the army"
            caption="Jimmy Mullins whilst in the army"
            width={300}
            height={24}
          /> 
          <p>Towards the end of the war, Jimmy&#39;s life was saved by an American soldier when he was prevented from driving over a stretch of road that had been discovered to be a minefield.</p>

          <p>When Bergen Belsen was liberated in 1945, Jimmy was amongst the first Allied troops to enter the camp and witness it.</p>
   
          
          <p>After the war ended, Jimmy worked for the Royal Mail.  He died in London on 30 January 2002, at the age of 88.</p>

        </ContentPage>
    </>;
  }