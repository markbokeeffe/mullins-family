import ContentPage from '../components/Page';
import Image from '../components/Image';

export default function Page() {
    return <>
        <ContentPage id="tomMullins" title="Tom Mullins">
        <Image
            src="/tomMullins.png"
            alt="Tom Mullins"
            caption="Tom Mullins, 1907 - 1995"
            float="left"
            width={300}
            height={24}
          /> 
          <p><span style={{ color: '#052003' }} className="font-bold">Tom Mullins was born in Clonmel in Co. Tipperary on 30 June 1907 to John and Johanna Mullins n&#233;e Donegan.</span></p>
          <p>Tom was the eldest surviving child in his family and at a young age, he emigrated to London, where he married Anne Pattison in 1938.  They lived in Kensington and Tom worked as a printer's labourer.</p>
          <p>After the outbreak of the war, Tom joined the Home Guard.</p>
          <Image
            src="/tomMullinsHomeGuard.png"
            alt="Tom Mullins' Home Guard record"
            caption="Tom Mullins' Home Guard record"
            className="mt-4"
            width={300}
            height={24}
            float="right"
          /> 
          <p>After the war, Tom worked as a Metropolitan Water Board Inspector.  He died in London in 1995 at the age of 88.</p>
          <Image
            src="/tomMullinsOld.png"
            alt="Tom Mullins in later years"
            caption="Tom Mullins in later years in London"
            className="mt-4"
            width={300}
            height={24}
          /> 
        </ContentPage>
    </>;
  }