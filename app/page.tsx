'use client'
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ChevronDown,
  MapPin,
  Truck,
  Package,
  Warehouse,
  Ship,
  BarChart3,
  Phone,
  Mail,
  MapPinned,
  Info,
  Calendar,
} from "lucide-react"
import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  const [date, setDate] = React.useState<Date>()

  const services = [
    {
      title: "Express Parcel Service",
      description:
        "Send shipments across regions for parcels across categories including heavy goods. Get value added services like RTO reduction tools, door-step inspection and tracking.",
      icon: <Package className="h-10 w-10 text-white" />,
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=2000&auto=format&fit=crop",
    },
    {
      title: "Warehousing",
      description:
        "We store inventory across highly optimised locations across the country to fulfill orders originating across both B2C and B2B channels of sale.",
      icon: <Warehouse className="h-10 w-10 text-white" />,
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2000&auto=format&fit=crop",
    },
    {
      title: "Part Truckload Freight",
      description:
        "Join one of the largest Express PTL networks in the region. Get door-to-door and hub-to-hub delivery with additions such as multi-modal freight and client dashboard.",
      icon: <Truck className="h-10 w-10 text-white" />,
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2000&auto=format&fit=crop",
    },
    {
      title: "Cross Border Service",
      description:
        "Seamless international shipping solutions with customs clearance, documentation support, and end-to-end tracking for global business needs.",
      icon: <Ship className="h-10 w-10 text-white" />,
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2000&auto=format&fit=crop",
    },
    {
      title: "Data Intelligence",
      description:
        "Leverage our advanced analytics and data insights to optimize your supply chain and make informed business decisions.",
      icon: <BarChart3 className="h-10 w-10 text-white" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    },
  ]

  const stats = [
    { value: "3.4 Bn+", label: "Parcels shipped since inception" },
    { value: "99.5%", label: "Population coverage" },
    { value: "33K+", label: "Businesses served" },
    { value: "6.1 Mn+", label: "Tonnes Freight shipped" },
    { value: "20 Mn+", label: "Square feet logistics infrastructure" },
  ]

  const serviceTypes = [
    {
      id: "two-wheelers",
      name: "Two Wheelers",
      icon: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=100&h=100&auto=format&fit=crop",
      description: "Fast delivery with our two-wheeler fleet for small packages and documents."
    },
    {
      id: "trucks",
      name: "Trucks",
      icon: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=100&h=100&auto=format&fit=crop",
      description: "Heavy-duty transport for large shipments and commercial goods."
    },
    {
      id: "packers",
      name: "Packers & Movers",
      icon: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=100&h=100&auto=format&fit=crop",
      description: "Complete relocation services with professional packing and moving."
    },
    {
      id: "intercity",
      name: "Intercity Courier",
      icon: "https://images.unsplash.com/photo-1609707957165-7c2a24510433?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Reliable courier services between major cities with express delivery options."
    },
  ]

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Universal Transport" width={100} height={80} />
            </Link>
            <nav className="hidden md:flex gap-6">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="#services" className="text-sm font-medium transition-colors hover:text-[#99ccff]">
                      Services
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Explore our logistics services</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="#solutions" className="text-sm font-medium transition-colors hover:text-[#99ccff]">
                      Solutions
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Custom logistics solutions</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="#partner" className="text-sm font-medium transition-colors hover:text-[#99ccff]">
                      Partner
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Become a business partner</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="#company" className="text-sm font-medium transition-colors hover:text-[#99ccff]">
                      Company
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>About Universal Transport</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="#track" className="text-sm font-medium transition-colors hover:text-[#99ccff]">
                      Track
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Track your shipment</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Link
                  href="#support"
                  className="hidden md:block text-sm font-medium transition-colors hover:text-[#99ccff]"
                >
                  Support
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>UT</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">24/7 Customer Support</h4>
                    <p className="text-sm">
                      Our team is available around the clock to assist with your logistics needs.
                    </p>
                    <div className="flex items-center pt-2">
                      <Phone className="mr-2 h-4 w-4 opacity-70" />
                      <span className="text-xs text-muted-foreground">
                        +91 7899669652
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <Button className="bg-[#99ccff] hover:bg-[#66b3ff] text-white">
              Ship Now <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#99ccff] py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-white/30 blur-3xl animate-pulse"></div>
          <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-blue-900/30 blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 animate-fadeIn">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                Logistics Solutions <br />
                <span className="text-blue-900 animate-slideUp" style={{ animationDelay: "0.3s" }}>Simplified</span>
              </h1>
              <p className="text-xl text-blue-900 max-w-[600px] animate-slideUp" style={{ animationDelay: "0.5s" }}>
                Fast, reliable, and efficient transport services for businesses and individuals across the globe.
              </p>
              <div className="flex gap-4 animate-slideUp" style={{ animationDelay: "0.7s" }}>
                <Button className="bg-white text-[#99ccff] hover:bg-blue-50 transition-all duration-300 hover:scale-105">Get Started</Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg animate-fadeIn" style={{ animationDelay: "0.5s" }}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Get an Estimate</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#99ccff]" />
                    <Select defaultValue="bangalore">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select City" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bangalore">Bangalore</SelectItem>
                        <SelectItem value="mumbai">Mumbai</SelectItem>
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="chennai">Chennai</SelectItem>
                        <SelectItem value="kolkata">Kolkata</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-[#99ccff]" />
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          {date ? format(date, "PPP") : "Select pickup date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <Tabs defaultValue="two-wheelers" className="w-full">
                    <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full h-auto">
                      {serviceTypes.map((type) => (
                        <TabsTrigger 
                          key={type.id} 
                          value={type.id} 
                          className="flex flex-col items-center gap-1 py-3 h-auto"
                        >
                          <div className="w-12 h-12 rounded-full overflow-hidden mb-1 border-2 border-[#99ccff]/20">
                            <Image
                              src={type.icon || "/placeholder.svg"}
                              alt={type.name}
                              width={48}
                              height={48}
                              className="object-cover w-full h-full"
                              onError={(e) => {
                                e.currentTarget.src = "/placeholder.svg";
                              }}
                            />
                          </div>
                          <span className="text-xs font-medium line-clamp-2 text-center px-1">{type.name}</span>
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    {serviceTypes.map((type) => (
                      <TabsContent key={type.id} value={type.id} className="pt-4">
                        <div className="space-y-4">
                          <p className="text-sm text-muted-foreground">
                            {type.description}
                          </p>
                          <Button className="w-full bg-[#99ccff] hover:bg-[#66b3ff] text-white transition-all duration-300 hover:scale-105">
                            Get an estimate (takes ~2 mins)
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Flexibility, Reliability and Scale</h2>
            <p className="text-2xl md:text-3xl font-bold text-[#99ccff]">The Answer is Universal Transport</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {stats.map((stat, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className="bg-white rounded-xl p-6 shadow-sm border border-[#99ccff]/20 text-center space-y-2 transform transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer"
                    >
                      <p className="text-3xl md:text-4xl font-bold text-[#99ccff]">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Learn more about our {stat.label.toLowerCase()}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Services that power our solutions ecosystem</h2>
            <div className="w-20 h-1 bg-[#99ccff] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden border-[#99ccff]/10 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <div className="flex items-center gap-2">
                      <div className="bg-[#99ccff] p-2 rounded-full">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button
                    variant="outline"
                    className="w-full border-[#99ccff] text-[#99ccff] hover:bg-[#99ccff] hover:text-white"
                  >
                    Know More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#99ccff]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6 text-white">
              <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
              <p className="text-blue-900">
                Our customer support team is reachable to assist you with any queries or requirements. Fill out the form
                and well get back to you as soon as possible.
              </p>

              <div className="space-y-4 bg-white p-6 rounded-xl shadow-md text-gray-800">
                <div className="flex items-start gap-3">
                  <MapPinned className="h-5 w-5 text-[#99ccff] mt-1" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-muted-foreground">Bangalore, Karnataka, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-[#99ccff] mt-1" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+91 7899669652</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[#99ccff] mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">vinayakabsgowda2002@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Request a Quote</CardTitle>
                <CardDescription>
                  Fill out the form below to get a customized quote for your logistics needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#99ccff] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#99ccff] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#99ccff] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="+91 7899669652"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company (Optional)
                      </label>
                      <input
                        id="company"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#99ccff] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Acme Inc."
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Service Type
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service.title.toLowerCase().replace(/\s+/g, "-")}>
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label htmlFor="pickup-date" className="text-sm font-medium">
                        Preferred Pickup Date
                      </label>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Select your preferred date for pickup</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="pickup-date"
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <CalendarComponent
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#99ccff] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us about your logistics requirements..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-[#99ccff] hover:bg-[#66b3ff] text-white">Submit Request</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2 lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Truck className="h-6 w-6 text-[#99ccff]" />
                <span className="font-bold text-xl">Universal Transport</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Fast, reliable, and efficient transport services for businesses and individuals across the globe.
              </p>
              <div className="mt-4">
                <Badge variant="outline" className="mr-2 bg-[#99ccff]/10">ISO Certified</Badge>
                <Badge variant="outline" className="bg-[#99ccff]/10">24/7 Support</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={`#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-muted-foreground hover:text-[#99ccff]"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-[#99ccff]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#careers" className="text-muted-foreground hover:text-[#99ccff]">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#press" className="text-muted-foreground hover:text-[#99ccff]">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#blog" className="text-muted-foreground hover:text-[#99ccff]">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-[#99ccff]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#terms" className="text-muted-foreground hover:text-[#99ccff]">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#privacy" className="text-muted-foreground hover:text-[#99ccff]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#cookies" className="text-muted-foreground hover:text-[#99ccff]">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#help" className="text-muted-foreground hover:text-[#99ccff]">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#track" className="text-muted-foreground hover:text-[#99ccff]">
                    Track Shipment
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-muted-foreground hover:text-[#99ccff]">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2023 Universal Transport. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Button variant="ghost" size="sm" className="hover:text-[#99ccff]">
                Terms
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-[#99ccff]">
                Privacy
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-[#99ccff]">
                Cookies
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
