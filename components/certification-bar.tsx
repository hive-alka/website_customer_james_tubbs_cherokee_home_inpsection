'use client';
import Slider from 'react-infinite-logo-slider';
import Image from 'next/image';

const credentials = [
    {
        logo: "/images/credentials/internachi-certified.png",
        title: "InterNACHI Certified",
        description: "International Association of Certified Home Inspectors"
    },
    {
        logo: "/images/credentials/cpi-certified.png",
        title: "Certified Professional Inspector",
        description: "CPI® - Advanced Home Inspection Certification"
    },
    {
        logo: "/images/credentials/chimney-inspector.png",
        title: "Chimney Inspector",
        description: "Certified Chimney & Fireplace Inspection"
    },
    {
        logo: "/images/credentials/roof-inspector.png",
        title: "Roof Inspector",
        description: "Professional Roof Inspection Certification"
    },
    {
        logo: "/images/credentials/deck-inspector.png",
        title: "Deck Inspector",
        description: "Certified Deck Safety & Structure Inspection"
    },
    {
        logo: "/images/credentials/exterior-inspector.png",
        title: "Exterior Inspector",
        description: "Building Exterior & Siding Specialist"
    },
    {
        logo: "/images/credentials/mold-inspector.png",
        title: "Mold Inspector",
        description: "Certified Mold Detection & Assessment"
    },
    {
        logo: "/images/credentials/radon-tester.png",
        title: "Radon Tester",
        description: "Licensed Radon Testing & Measurement"
    },
    {
        logo: "/images/credentials/infrared-thermography.png",
        title: "Infrared Thermography",
        description: "Thermal Imaging Technology Specialist"
    },
    {
        logo: "/images/credentials/buy-back-guarantee.png",
        title: "Buy-Back Guarantee",
        description: "Up to $5,000 Home Repair Protection"
    },
    {
        logo: "/images/credentials/honor-guarantee.png",
        title: "Honor Guarantee",
        description: "90-Day Repair Cost Coverage"
    },
    {
        logo: "/images/credentials/11th-month-warranty.png",
        title: "11th Month Warranty",
        description: "Pre-Warranty Expiration Inspection Service"
    },
    {
        logo: "/images/credentials/move-in-certified.png",
        title: "Move-In Certified",
        description: "New Home Move-In Inspection Program"
    },
    {
        logo: "/images/credentials/annual-maintenance.png",
        title: "Annual Maintenance",
        description: "Yearly Home Maintenance Inspection"
    },
    {
        logo: "/images/credentials/attic-insulation.png",
        title: "Attic & Insulation",
        description: "Energy Efficiency & Insulation Specialist"
    },
    {
        logo: "/images/credentials/fire-extinguisher.png",
        title: "Safety Systems",
        description: "Fire & Safety Equipment Inspection"
    },
    {
        logo: "/images/credentials/plumbing-inspector.png",
        title: "Plumbing Systems",
        description: "Comprehensive Plumbing Inspection"
    }
];

export function CertificationBar() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center text-center mb-8">
                    <p className="text-zinc-700 font-medium text-lg">
                        <span className='text-blue-600 font-semibold'>Certified & Trusted</span> Home Inspection Professional
                    </p>
                </div>

                <Slider
                    width="150px"
                    duration={25}
                    pauseOnHover={true}
                    blurBorders={false}
                >
                    {credentials.map((credential, index) => (
                        <Slider.Slide key={index}>
                            <div className='mr-8 w-full h-full flex items-center justify-center'>
                                <Image
                                    src={credential.logo}
                                    alt={credential.title}
                                    width={80}
                                    height={80}
                                    className='w-full h-full object-contain'
                                />
                            </div>
                        </Slider.Slide>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
