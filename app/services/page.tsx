import SubServiceCard from "@/components/card/subServiceCard";
import SectionHead from "@/components/sections/home/sectionHead";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <div className='border-t border-sidebar'>
      <SectionHead title="Our Services" description="Transform your brand with our innovative digital solutions that captivate and engage your audience." />


      {/* Story  */}
      <div className="mt-10  border-t border-sidebar">
        <div className="p-10 border-b border-sidebar">
          <h2 className="text-[30px] font-bold ">Design</h2>
          <p className="text-gray90 py-4">At zevroIT , our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences. </p>
          <Button className="mt-6" variant="secondary">Our design services include:</Button>
        </div>
        <div >
          <h2 className="text-[28px] font-barlow text-gray60 p-10">User Experience (UX) Design</h2>
          <div className="border-t border-b border-sidebar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <SubServiceCard iconSrc="/icons/services/1.png" title="User Research and Persona Development" />
            <SubServiceCard iconSrc="/icons/services/2.png" title="Information Architecture and Wireframing" />
            <SubServiceCard iconSrc="/icons/services/3.png" title="Interactive Prototyping and User Testing" />
            <SubServiceCard iconSrc="/icons/services/4.png" title="UI Design and Visual Branding" />

          </div>
        </div>
        <div >
          <h2 className="text-[28px] font-barlow text-gray60 p-10">User Interface (UI) Design</h2>
          <div className="border-t border-b border-sidebar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <SubServiceCard iconSrc="/icons/services/1.png" title="User Research and Persona Development" />
            <SubServiceCard iconSrc="/icons/services/2.png" title="Information Architecture and Wireframing" />
            <SubServiceCard iconSrc="/icons/services/3.png" title="Interactive Prototyping and User Testing" />
            <SubServiceCard iconSrc="/icons/services/4.png" title="UI Design and Visual Branding" />

          </div>
        </div>
        <div >
          <h2 className="text-[28px] font-barlow text-gray60 p-10">Branding and Identity</h2>
          <div className="border-t border-b border-sidebar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <SubServiceCard iconSrc="/icons/services/1.png" title="User Research and Persona Development" />
            <SubServiceCard iconSrc="/icons/services/2.png" title="Information Architecture and Wireframing" />
            <SubServiceCard iconSrc="/icons/services/3.png" title="Interactive Prototyping and User Testing" />
            <SubServiceCard iconSrc="/icons/services/4.png" title="UI Design and Visual Branding" />

          </div>
        </div>
      </div>
      {/* Engineering */}
      <div className="mt-10  border-sidebar">
        <div className="p-10 border-b border-sidebar">
          <h2 className="text-[30px] font-bold ">Engineering</h2>
          <p className="text-gray90 py-4">Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs. </p>
          <Button className="mt-6" variant="secondary">Our engineering services include:</Button>
        </div>
        <div >
          <h2 className="text-[28px] font-barlow text-gray60 p-10">Web Development</h2>
          <div className="border-t border-b border-sidebar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <SubServiceCard iconSrc="/icons/services/1.png" title="User Research and Persona Development" />
            <SubServiceCard iconSrc="/icons/services/2.png" title="Information Architecture and Wireframing" />
            <SubServiceCard iconSrc="/icons/services/3.png" title="Interactive Prototyping and User Testing" />
            <SubServiceCard iconSrc="/icons/services/4.png" title="UI Design and Visual Branding" />

          </div>
        </div>
        <div >
          <h2 className="text-[28px] font-barlow text-gray60 p-10">Mobile App Development</h2>
          <div className="border-t border-b border-sidebar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <SubServiceCard iconSrc="/icons/services/1.png" title="User Research and Persona Development" />
            <SubServiceCard iconSrc="/icons/services/2.png" title="Information Architecture and Wireframing" />
            <SubServiceCard iconSrc="/icons/services/3.png" title="Interactive Prototyping and User Testing" />
            <SubServiceCard iconSrc="/icons/services/4.png" title="UI Design and Visual Branding" />

          </div>
        </div>
        <div >
          <h2 className="text-[28px] font-barlow text-gray60 p-10">Custom Software Development</h2>
          <div className="border-t border-b border-sidebar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <SubServiceCard iconSrc="/icons/services/1.png" title="User Research and Persona Development" />
            <SubServiceCard iconSrc="/icons/services/2.png" title="Information Architecture and Wireframing" />
            <SubServiceCard iconSrc="/icons/services/3.png" title="Interactive Prototyping and User Testing" />
            <SubServiceCard iconSrc="/icons/services/4.png" title="UI Design and Visual Branding" />

          </div>
        </div>
      </div>
      {/* Project Management */}
      <div className="mt-10  border-sidebar">
        <div className="p-10 border-b border-sidebar">
          <h2 className="text-[30px] font-bold ">Project Management</h2>
          <p className="text-gray90 py-4">Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process. </p>
          <Button className="mt-6" variant="secondary">Our project management services include:</Button>
        </div>
        <div >
          <h2 className="text-[28px] font-barlow text-gray60 p-10">Project Planning and Scoping</h2>
          <div className="border-t border-b border-sidebar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <SubServiceCard iconSrc="/icons/services/1.png" title="User Research and Persona Development" />
            <SubServiceCard iconSrc="/icons/services/2.png" title="Information Architecture and Wireframing" />
            <SubServiceCard iconSrc="/icons/services/3.png" title="Interactive Prototyping and User Testing" />
            <SubServiceCard iconSrc="/icons/services/4.png" title="UI Design and Visual Branding" />

          </div>
        </div>
        <div >
          <h2 className="text-[28px] font-barlow text-gray60 p-10">Agile Development</h2>
          <div className="border-t border-b border-sidebar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <SubServiceCard iconSrc="/icons/services/1.png" title="User Research and Persona Development" />
            <SubServiceCard iconSrc="/icons/services/2.png" title="Information Architecture and Wireframing" />
            <SubServiceCard iconSrc="/icons/services/3.png" title="Interactive Prototyping and User Testing" />
            <SubServiceCard iconSrc="/icons/services/4.png" title="UI Design and Visual Branding" />

          </div>
        </div>
        <div >
          <h2 className="text-[28px] font-barlow text-gray60 p-10">Quality Assurance and Testing</h2>
          <div className="border-t border-b border-sidebar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <SubServiceCard iconSrc="/icons/services/1.png" title="User Research and Persona Development" />
            <SubServiceCard iconSrc="/icons/services/2.png" title="Information Architecture and Wireframing" />
            <SubServiceCard iconSrc="/icons/services/3.png" title="Interactive Prototyping and User Testing" />
            <SubServiceCard iconSrc="/icons/services/4.png" title="UI Design and Visual Branding" />

          </div>
        </div>
      </div>
    </div>
  )
}
