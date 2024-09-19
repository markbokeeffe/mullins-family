import ContentPage from '../components/Page';
import Image from '../components/Image';

export default function Page() {
    return <>
        <ContentPage id="billMullins" title="Bill Mullins">
        <Image
            src="/billMullins.png"
            alt="Bill Mullins"
            caption="Bill Mullins, 1911 - 1998"
            float="left"
            width={300}
            height={24}
          /> 
          <p><span style={{ color: '#052003' }} className="font-bold">Bill Mullins was born in Clonmel in Co. Tipperary on 15 September 1911 to John and Johanna Mullins n&#233;e Donegan.</span></p>
         
          <Image
            src="/billMullinsBurma.png"
            alt="Bill Mullins in Burma"
            caption="Bill Mullinson the left of the group in Burma"
            float="right"
            width={300}
            height={24}
          /> 
          <p>At a young age, Bill emigrated to London and followed his father&#39;s footsteps into the British Army.  By the time that the Second World War broke out in 1939, Bill was already an experienced soldier.  He was in the 2nd Battalion of the Royal Norfolk Regiment.</p>
          <Image
            src="/billMullinsCamp.png"
            alt="Bill Mullins in his camp during the war"
            caption="Bill Mullins in his camp during the war"
            width={300}
            height={24}
          /> 
          
          <p>During the war years, Bill spent time initially in France.  He was present during the evacuation of Dunkirk in 1940.  Later, he was stationed in Burma and in India.</p>  
          <p>In the spring and summer of 1944, his battalion took part in one of the most fierce battles of the entire war: the Battle of Kohima.  In this battle, the Allies forced Japan to abandon much of what it had captured in India.  This was a turning point for the Allie and it changed the course of the war in the Pacific.</p>

          <p>Following the end of the war, Bill remained as a soldier.  He took part in boxing competitions in the army and won a number of prizes.</p>
          <Image
            src="/billMullinsGroup.png"
            alt="Bill Mullins group"
            caption="Bill Mullins pictured in the centre of this group"
            className="mt-4"
            float="right"
            width={400}
            height={24}
          />
          
          <p>In his 80s, in the mid-1990s, Bill left London and returned to live in Clonmel.  He died there at the age of 86 on 12 June 1998.</p>

          <Image
            src="/billMullinsOld.png"
            alt="Bill Mullins in old age in Clonmel in the late 1990s"
            caption="Bill Mullins after his final return to Clonmel in the late 1990s"
            className="mt-4"
            width={400}
            height={24}
          />
        </ContentPage>
    </>;
  }