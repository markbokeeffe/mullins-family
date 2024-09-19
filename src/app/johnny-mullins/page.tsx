import ContentPage from '../components/Page';
import Image from '../components/Image';

export default function Page() {
    return <>
        <ContentPage id="johnnyMullins" title="Johnny Mullins">
        <Image
            src="/johnnyMullins.png"
            alt="John Mullins"
            caption="John Mullins, 1909 - 2001"
            float="left"
            width={300}
            height={24}
          /> 
          <p><span style={{ color: '#052003' }} className="font-bold">Johnny Mullins was born in Clonmel in Co. Tipperary on 4 June 1909 to John and Johanna Mullins n&#233;e Donegan.</span></p>
          <p>At a young age, Johnny emigrated to London, where he married Evelyn Bartlett in 1937.</p>
          <Image
            src="/johnnyMullinsParents.png"
            alt="Johnny Mullins with parents"
            caption="Johnny Mullins with his parents, John and Johanna, outside of their home in Glenconnor, Clonmel in the 1930s."
            className="mt-4"
            float="right"
            width={300}
            height={24}
          /> 
          <p>After the outbreak of the Second World War in 1939, Johnny enlisted in the British Army in the Royal Armoured Corps.  Over the course of those years, Johnny spent time in both Burma and in India.</p>
          <Image
            src="/johnnyMullinsBurma.png"
            alt="Johnny Mullins in Burma"
            caption="Johnny Mullins in the front right in Burma."
            className="mt-4"
            width={400}
            height={24}
          />
          <p>On returning to London after the war, he worked for the Royal Mail.  He died in London on 23 December 2001.</p>
          <Image
            src="/johnnyMullinsDelhi.png"
            alt="Johnny Mullins in India"
            caption="Johnny Mullins in the centre in India."
            className="mt-4"
            width={400}
            height={24}
            float="right"
          />
          <Image
            src="/johnnyMullinsDelhi2.png"
            alt="Johnny Mullins in India"
            caption="Johnny Mullins on the left in India."
            className="mt-4"
            width={400}
            height={24}
          />
        </ContentPage>
    </>;
  }