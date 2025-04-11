
import { useState } from "react";
import { AnimateOnScroll } from "./ui/motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from 'sonner';
import { motion } from "framer-motion";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function Resume() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const [verified, setVerified] = useState(false);

  const handleSendOTP = () => {
    // Simple phone number validation
    if (!phoneNumber || phoneNumber.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }

    // In a real app, you would send an OTP to the phone number
    // For this demo, we'll just show the OTP input
    toast.success("OTP sent to your phone number!");
    setShowOTP(true);
  };

  const handleVerifyOTP = () => {
    // For demo purposes, any 4-digit OTP is valid
    if (!otp || otp.length !== 4) {
      toast.error("Please enter a valid 4-digit OTP");
      return;
    }

    // In a real app, you would verify the OTP with a backend service
    // For this demo, we'll just set verified to true
    toast.success("OTP verified successfully!");
    setVerified(true);
  };

  const handleDownloadResume = () => {
    // Redirect to Google Drive or any other external link
    window.open("https://drive.google.com/file/d/example-resume-link/view", "_blank");
    toast.success("Redirecting to resume...");
  };

  return (
    <section id="resume" className="section min-h-[80vh] flex items-center">
      <div className="container-custom">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="highlight">My Resume</span>
          </h2>
        </AnimateOnScroll>

        <div className="max-w-md mx-auto">
          <Card className="p-6 border border-border">
            {!verified ? (
              <>
                <h3 className="text-xl font-medium mb-6 text-center">Verify Your Number</h3>
                <p className="text-muted-foreground text-center mb-6">
                  To access my resume, please verify your phone number with an OTP.
                </p>

                {!showOTP ? (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <Button 
                      className="w-full" 
                      onClick={handleSendOTP}
                    >
                      Send OTP
                    </Button>
                  </div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Enter OTP sent to {phoneNumber}
                      </label>
                      <div className="flex justify-center">
                        <InputOTP 
                          maxLength={4} 
                          value={otp} 
                          onChange={setOtp}
                        >
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                          </InputOTPGroup>
                        </InputOTP>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => setShowOTP(false)}
                      >
                        Back
                      </Button>
                      <Button 
                        className="flex-1" 
                        onClick={handleVerifyOTP}
                      >
                        Verify OTP
                      </Button>
                    </div>
                  </motion.div>
                )}
              </>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-center"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-white"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium">Verification Successful</h3>
                  <p className="text-muted-foreground mt-2">
                    Thank you for verifying your identity.
                  </p>
                </div>
                <Button 
                  size="lg" 
                  className="w-full"
                  onClick={handleDownloadResume}
                >
                  Download Resume
                </Button>
              </motion.div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
