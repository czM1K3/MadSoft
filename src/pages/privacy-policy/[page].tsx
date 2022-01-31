import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Layout from "../../components/layout";
import PrivacyPolicyPages from "../../data/privacyPolicy";
import type { PrivacyPolicy as PrivacyPolicyType } from "../../types/privacyPolicy";

type PrivacyPolicyProps = {
	messages: any;
	data: PrivacyPolicyType;
	locale: string;
};

const PrivacyPolicy: NextPage<PrivacyPolicyProps> = ({ data, locale }) => {
	if (locale === "cs")
		return (
			<Layout>
				<h1>Ochrana osobních údajů</h1>{" "}
				<p>
					Michal Maděra vytvořil aplikaci {data.title} jako{" "}
					{data.free ? "neplacenou" : "placenou"} aplikace. Tuto SLUŽBU poskytuje
					zdarma a je určen pro užití tak, jak je.
				</p>{" "}
				<p>
					Tato stránka slouží k informování návštěvníků o moje zásady se
					shromažďováním, používáním a zveřejnění osobních údajů, pokud se někdo
					rozhodl použít moje služba.
				</p>{" "}
				<p>
					Pokud se rozhodnete používat moji Službu, souhlasíte ke shromažďování a
					používání informací v této souvislosti politika. Osobní údaje, které
					shromažďuji, jsou slouží k poskytování a zlepšování Služby. Nebudu používat
					ani sdílet vaše informace s kýmkoli s výjimkou případů popsaných v tomto
					Soukromí Politika.
				</p>{" "}
				<p>
					Pojmy použité v těchto Zásadách ochrany osobních údajů mají stejný význam
					jako v našich podmínkách, které jsou dostupné na Určete predátory, pokud
					není v tomto soukromí uvedeno jinak Politika.
				</p>{" "}
				<p>
					<strong>Shromažďování a používání informací</strong>
				</p>{" "}
				<p>
					Pro lepší zážitek při používání naší služby, Mohu po vás požadovat, abyste
					nám poskytli určité osobně identifikovatelné údaje. The informace, které
					požaduji, budou uchovávány ve vašem zařízení a žádným způsobem je
					neshromažďuji.
				</p>{" "}
				<p>
					Aplikace používá služby třetích stran, které mohou shromažďovat informace
					používané k vaší identifikaci.
				</p>{" "}
				<div>
					<p>
						Odkaz na zásady ochrany osobních údajů poskytovatelů služeb třetích stran
						používá aplikace
					</p>{" "}
					<ul>
						<li>
							<a
								href="https://www.google.com/policies/privacy/"
								target="_blank"
								rel="noreferrer"
							>
								Google Play Services
							</a>
						</li>
					</ul>
				</div>{" "}
				<p>
					<strong>Sběr dat</strong>
				</p>{" "}
				<p>
					Chci vám to oznámit kdykoli používáte moji Službu v případě chyby v
					aplikace Sbírám data a informace (prostřednictvím třetího party produkty)
					na vašem telefonu s názvem Log Data. Tato data protokolu může obsahovat
					informace, jako je internet vašeho zařízení Adresa protokolu („IP“), název
					zařízení, operační systém verzi, konfiguraci aplikace při používání moje
					služba, čas a datum vašeho použití Servis a další statistiky.
				</p>{" "}
				<p>
					<strong>Cookies</strong>
				</p>{" "}
				<p>
					Cookies jsou soubory s malým množstvím dat, které jsou běžně používané jako
					anonymní jedinečné identifikátory. Tyto jsou odeslané do vašeho prohlížeče
					z webových stránek, které navštěvujete, a jsou uloženy ve vnitřní paměti
					vašeho zařízení.
				</p>{" "}
				<p>
					Tato služba tyto „cookies“ výslovně nepoužívá. Aplikace však může používat
					kód a knihovny třetích stran používat „cookies“ ke shromažďování informací
					a zlepšování jejich služby. Máte možnost buď přijmout, nebo odmítnout tyto
					soubory cookie a vědět, kdy je soubor cookie odeslán na váš přístroj. Pokud
					se rozhodnete odmítnout naše soubory cookie, nemusíte být moci používat
					některé části této služby.
				</p>{" "}
				<p>
					<strong>Poskytovatelé služeb</strong>
				</p>{" "}
				<p>
					Mohu zaměstnávat společnosti třetích stran a jednotlivci z následujících
					důvodů:
				</p>{" "}
				<ul>
					<li>pro usnadnění naší služby;</li>{" "}
					<li>poskytování služby naším jménem;</li>{" "}
					<li>pro provádění služeb souvisejících se službou; nebo</li>{" "}
					<li>Aby nám pomohly analyzovat, jak je naše služba používána.</li>
				</ul>{" "}
				<p>
					Chci o tom uživatele informovat Služba, ke které mají tyto třetí strany
					přístup Osobní informace. Důvodem je plnění úkolů jim byl přidělen naším
					jménem. Jsou však povinni nezveřejňovat ani používat informace pro žádné
					jiné účely účel.
				</p>{" "}
				<p>
					<strong>Bezpečnost</strong>
				</p>{" "}
				<p>
					Vážím si vaší důvěry, kterou nám poskytujete vaše osobní údaje, proto se je
					snažíme používat komerčně přijatelné prostředky k jeho ochraně. Ale pamatuj
					že žádný způsob přenosu přes internet, nebo metoda elektronické úložiště je
					100% bezpečné a spolehlivé a Nemohu zaručit jeho absolutní bezpečnost.
				</p>{" "}
				<p>
					<strong>Odkazy na jiné stránky</strong>
				</p>{" "}
				<p>
					Tato služba může obsahovat odkazy na jiné stránky. Pokud kliknete na odkazu
					třetí strany budete přesměrováni na daný web. Upozorňujeme, že tyto externí
					stránky nejsou provozovány společností mě. Proto vám důrazně doporučuji
					přečtěte si Zásady ochrany osobních údajů těchto webových stránek. Nemám
					nad tím kontrolu a předpokládám, že ne odpovědnost za obsah, zásady ochrany
					osobních údajů, popř praktiky jakýchkoli stránek nebo služeb třetích stran.
				</p>{" "}
				<p>
					<strong>Soukromí dětí</strong>
				</p>{" "}
				<p>
					Tyto služby nejsou určeny osobám mladším 13 let. Osobně vědomě nesbírám
					identifikovatelné údaje od dětí mladších 13 let. V případě Zjistil jsem, že
					dítě mladší 13 let poskytlo já s osobními údaji, Okamžitě to smažu z našich
					serverů. jestli ty jste rodič nebo opatrovník a jste si vědomi toho, že
					vaše dítě nám poskytla osobní údaje, kontaktujte nás prosím já tak, že budu
					moci dělat nezbytné akce.
				</p>{" "}
				<p>
					<strong>Změny těchto zásad ochrany osobních údajů</strong>
				</p>{" "}
				<p>
					Mohu aktualizovat naše Zásady ochrany osobních údajů z čas od času. Proto
					vám doporučujeme zkontrolovat tuto stránku pravidelně pro jakékoli změny.
					já budu upozornit vás na jakékoli změny zveřejněním nových zásad ochrany
					osobních údajů na této straně. Tyto změny jsou účinné ihned poté jsou
					zveřejněny na této stránce.
				</p>{" "}
				<p>
					<strong>Kontaktujte nás</strong>
				</p>{" "}
				<p>
					Pokud máte nějaké dotazy nebo návrhy týkající se moje zásady ochrany
					osobních údajů, neváhejte mě kontaktovat já u Michala Maděry.
				</p>{" "}
				<p>
					Tato stránka zásad ochrany osobních údajů byla vytvořena na
					<a
						href="https://privacypolicytemplate.net"
						target="_blank"
						rel="noreferrer"
					>
						privacypolicytemplate.net
					</a>
					a upraven/vygenerován
					<a
						href="https://app-privacy-policy-generator.firebaseapp.com/"
						target="_blank"
						rel="noreferrer"
					>
						App Privacy Policy Generator
					</a>{" "}
					a přeložena pomocí{" "}
					<a href="https://translate.google.com/" target="_blank" rel="noreferrer">
						Google Překladače
					</a>
					.
				</p>
			</Layout>
		);
	return (
		<Layout>
			<h1>Privacy Policy</h1>{" "}
			<p>
				Michal Maděra built the {data.title} app as a {data.free ? "Free" : "Paid"}{" "}
				app. This SERVICE is provided by Michal Maděra at no cost and is intended
				for use as is.
			</p>{" "}
			<p>
				This page is used to inform visitors regarding my policies with the
				collection, use, and disclosure of Personal Information if anyone decided to
				use my Service.
			</p>{" "}
			<p>
				If you choose to use my Service, then you agree to the collection and use of
				information in relation to this policy. The Personal Information that I
				collect is used for providing and improving the Service. I will not use or
				share your information with anyone except as described in this Privacy
				Policy.
			</p>{" "}
			<p>
				The terms used in this Privacy Policy have the same meanings as in our Terms
				and Conditions, which is accessible at Determine Predators unless otherwise
				defined in this Privacy Policy.
			</p>{" "}
			<p>
				<strong>Information Collection and Use</strong>
			</p>{" "}
			<p>
				For a better experience, while using our Service, I may require you to
				provide us with certain personally identifiable information. The information
				that I request will be retained on your device and is not collected by me in
				any way.
			</p>{" "}
			<p>
				The app does use third party services that may collect information used to
				identify you.
			</p>{" "}
			<div>
				<p>
					Link to privacy policy of third party service providers used by the app
				</p>{" "}
				<ul>
					<li>
						<a
							href="https://www.google.com/policies/privacy/"
							target="_blank"
							rel="noreferrer"
						>
							Google Play Services
						</a>
					</li>
				</ul>
			</div>{" "}
			<p>
				<strong>Log Data</strong>
			</p>{" "}
			<p>
				I want to inform you that whenever you use my Service, in a case of an error
				in the app I collect data and information (through third party products) on
				your phone called Log Data. This Log Data may include information such as
				your device Internet Protocol (“IP”) address, device name, operating system
				version, the configuration of the app when utilizing my Service, the time
				and date of your use of the Service, and other statistics.
			</p>{" "}
			<p>
				<strong>Cookies</strong>
			</p>{" "}
			<p>
				Cookies are files with a small amount of data that are commonly used as
				anonymous unique identifiers. These are sent to your browser from the
				websites that you visit and are stored on your device&apos;s internal
				memory.
			</p>{" "}
			<p>
				This Service does not use these “cookies” explicitly. However, the app may
				use third party code and libraries that use “cookies” to collect information
				and improve their services. You have the option to either accept or refuse
				these cookies and know when a cookie is being sent to your device. If you
				choose to refuse our cookies, you may not be able to use some portions of
				this Service.
			</p>{" "}
			<p>
				<strong>Service Providers</strong>
			</p>{" "}
			<p>
				I may employ third-party companies and individuals due to the following
				reasons:
			</p>{" "}
			<ul>
				<li>To facilitate our Service;</li>{" "}
				<li>To provide the Service on our behalf;</li>{" "}
				<li>To perform Service-related services; or</li>{" "}
				<li>To assist us in analyzing how our Service is used.</li>
			</ul>{" "}
			<p>
				I want to inform users of this Service that these third parties have access
				to your Personal Information. The reason is to perform the tasks assigned to
				them on our behalf. However, they are obligated not to disclose or use the
				information for any other purpose.
			</p>{" "}
			<p>
				<strong>Security</strong>
			</p>{" "}
			<p>
				I value your trust in providing us your Personal Information, thus we are
				striving to use commercially acceptable means of protecting it. But remember
				that no method of transmission over the internet, or method of electronic
				storage is 100% secure and reliable, and I cannot guarantee its absolute
				security.
			</p>{" "}
			<p>
				<strong>Links to Other Sites</strong>
			</p>{" "}
			<p>
				This Service may contain links to other sites. If you click on a third-party
				link, you will be directed to that site. Note that these external sites are
				not operated by me. Therefore, I strongly advise you to review the Privacy
				Policy of these websites. I have no control over and assume no
				responsibility for the content, privacy policies, or practices of any
				third-party sites or services.
			</p>{" "}
			<p>
				<strong>Children&apos;s Privacy</strong>
			</p>{" "}
			<p>
				These Services do not address anyone under the age of 13. I do not knowingly
				collect personally identifiable information from children under 13. In the
				case I discover that a child under 13 has provided me with personal
				information, I immediately delete this from our servers. If you are a parent
				or guardian and you are aware that your child has provided us with personal
				information, please contact me so that I will be able to do necessary
				actions.
			</p>{" "}
			<p>
				<strong>Changes to This Privacy Policy</strong>
			</p>{" "}
			<p>
				I may update our Privacy Policy from time to time. Thus, you are advised to
				review this page periodically for any changes. I will notify you of any
				changes by posting the new Privacy Policy on this page. These changes are
				effective immediately after they are posted on this page.
			</p>{" "}
			<p>
				<strong>Contact Us</strong>
			</p>{" "}
			<p>
				If you have any questions or suggestions about my Privacy Policy, do not
				hesitate to contact me at Michal Maděra.
			</p>{" "}
			<p>
				This privacy policy page was created at
				<a
					href="https://privacypolicytemplate.net"
					target="_blank"
					rel="noreferrer"
				>
					privacypolicytemplate.net
				</a>
				and modified/generated by
				<a
					href="https://app-privacy-policy-generator.firebaseapp.com/"
					target="_blank"
					rel="noreferrer"
				>
					App Privacy Policy Generator
				</a>
			</p>
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: PrivacyPolicyPages.map((page) => [
			`/privacy-policy/${page.route}`,
			`/en/privacy-policy/${page.route}`,
		]).flat(),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<PrivacyPolicyProps> = async ({
	locale,
	params,
}) => {
	if (!params || typeof params.page !== "string") return { notFound: true };
	const current = PrivacyPolicyPages.find((p) => p.route === params.page);
	if (!current) return { notFound: true };
	return {
		props: {
			messages: (await import(`../../../translations/${locale}.json`)).default,
			data: current,
			locale: locale ?? "en",
		},
	};
};

export default PrivacyPolicy;
