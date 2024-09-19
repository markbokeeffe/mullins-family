import ContentPage from '../components/Page';
import Image from '../components/Image';

export default function Page() {
    return <>
        <ContentPage id="johnMullins" title="John Mullins">
        <Image
            src="/joper.png"
            alt="John Mullins"
            caption="Lance Corporal John Mullins, 5th Battalion, Royal Irish Regiment, circa 1917"
            float="left"
            width={300}
            height={24}
          /> 
          <p><span style={{ color: '#052003' }} className="font-bold">John Mullins was born in Old Bridge in Clonmel in Co. Tipperary on 1 May 1878 to John Mullins (a weaver from Carrick-on-Suir in Co. Tipperary) and Anne Connolly (from New Birmingham in Co. Tipperary).</span></p>
          <p>John was one of the youngest of a large family.  Most of his siblings emigrated to the United States.  He went to America at the age of 15 in 1893 but returned to Clonmel some time before 1906 and worked as a labourer.</p>
          <p>In 1906, John married Johanna Donegan, who was also from Clonmel.  They lived in 29 Roaring Spring Road in the Old Bridge area of the town.  In 1906 - the same year that they married - their first son, John, was born.  However, he died at the age of 2 months in September 1906.</p>
          <Image
            src="/mullinsFamily1880s.png"
            alt="Mullins Family, 1880s"
            caption="A young John Mullins in the front centre, amongst his parents and some of his siblings in the late 1880."
            className="mt-4"
            float="right"
            width={300}
            height={24}
          /> 
          <p>Over the following years, John and Johanna went on to have five more children:</p>
          <ul>
            <li>- Tom (1907 - 1995)</li>
            <li>- John (1909 - 2001)</li>
            <li>- Bill (1911 - 1998)</li>
            <li>- Jimmy (1913 - 2002)</li>
            <li>- Anne (1919 - 2002)</li>
          </ul>
          <Image
            src="/pensionBook1.png"
            alt="John Mullins Army book"
            caption="John Mullins' military details from his army log book"
            className="mt-4"
            width={400}
            height={24}
          />
          <span className="subtitle">The Great War</span>
          <p>Clonmel was a garrison town with a military barracks located there.  After the First World War broke out in 1914, there was a large recruitment of local men in Clonmel who were keen to get work and a good income.  On 27 April 1915, John enlisted at the age of 36 and joined the 5th Battalion of the Royal Irish Regiment, B Squadron.  His army number was 4951 and he would attain the rank of Lance Corporal. </p>
          <p>During the years of this war, John was stationed in Salonica in Greece until 1917.  Following this, he was in Egypt until 1918, before finally moving on to France.</p>
          <p>After his time in the war ended in 1918, John returned to his family in Clonmel and their youngest child, Anne, was born in 1919.</p>
          <Image
            src="/pensionBook3.png"
            alt="John Mullins Army book"
            caption="Entries from John Mullins' log book"
            className="mt-4"
            width={400}
            height={24}
            float="right"
          />
          <p>The army built a number of homes for war veterans on the outskirts of Clonmel in a place called Glenconnor.  And around 1921 or 1922, John and his family moved from Old Bridge to their new home in 9 Glenconnor Cottages, where he would remain for the remainder of his life.</p>
          <span className="subtitle">The Second World War and afterwards</span>
          <p>After the Second World War broke out in 1939, John went to Wales to work in a munitions factory, in order to support the effort.  Also, his four sons, each of whom was now living in London, joined the fight either in the army or in the Home Guard.</p>
          <p>Following the war, John continued working in Clonmel.  He died on 9 December 1953.</p>
          <Image
            src="/johnJohannaMullins.png"
            alt="John and Johanna Mullins"
            caption="John and Johanna Mullins"
            className="mt-4"
            width={400}
            height={24}
          />

        </ContentPage>
    </>;
  }