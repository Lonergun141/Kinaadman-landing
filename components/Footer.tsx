'use client'

import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

export function Footer() {
    return (
        <footer className="bg-background border-t border-border">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="mb-4">
                            <span className="font-serif text-2xl font-bold text-foreground">Kinaadman</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            Secure, institutional research management platform exclusively designed for colleges and universities.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-foreground hover:text-secondary transition-colors">
                                <Twitter size={18} />
                            </Link>
                            <Link href="#" className="text-foreground hover:text-secondary transition-colors">
                                <Github size={18} />
                            </Link>
                            <Link href="#" className="text-foreground hover:text-secondary transition-colors">
                                <Linkedin size={18} />
                            </Link>
                            <Link href="#" className="text-foreground hover:text-secondary transition-colors">
                                <Mail size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="font-medium font-serif text-foreground mb-6">Product</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                                    Security
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                                    API Docs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-medium font-serif text-foreground mb-6">Company</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-medium font-serif text-foreground mb-6">Legal</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                                    Privacy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                                    Terms
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                                    GDPR
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                                    Accessibility
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-border pt-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-muted-foreground text-sm">
                            © {new Date().getFullYear()} Kinaadman. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <Link href="#" className="text-muted-foreground hover:text-secondary text-sm transition-colors">
                                Status
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-secondary text-sm transition-colors">
                                Changelog
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-secondary text-sm transition-colors">
                                Support
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
