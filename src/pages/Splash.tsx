import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Target, CheckCircle2 } from "lucide-react";

const Splash = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-8 md:py-12">
      <div className="text-center max-w-4xl mx-auto space-y-12">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-tight">
            Create Your Professional Resume in Minutes
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Build an ATS-optimized resume that helps you stand out. Our intelligent system ensures your resume gets noticed by recruiters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">ATS-Optimized</h3>
            <p className="text-gray-600">Built to pass Applicant Tracking Systems and reach human recruiters</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <FileText className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Professional Templates</h3>
            <p className="text-gray-600">Clean, modern designs that highlight your experience</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Target className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
            <p className="text-gray-600">Step-by-step guidance to create the perfect resume</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link to="/builder" className="w-full sm:w-auto">
            <Button 
              size="lg" 
              className="w-full h-14 text-lg font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all bg-accent hover:bg-accent/90"
            >
              <FileText className="w-5 h-5" />
              Create Your Resume Now
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </Link>
          <Link to="/ats-checker" className="w-full sm:w-auto">
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full h-14 text-lg font-medium flex items-center justify-center gap-2 shadow hover:shadow-lg transition-all"
            >
              <Target className="w-5 h-5" />
              Check ATS Score
            </Button>
          </Link>
        </div>

        <div className="pt-8 text-sm text-gray-500">
          <p className="max-w-md mx-auto">Join thousands of job seekers who have successfully landed their dream jobs using SXO-Resume</p>
        </div>
      </div>
    </div>
  );
};

export default Splash;