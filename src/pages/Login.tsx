import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { GraduationCap, Mail, Lock, User, ArrowRight } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: loginData.email,
        password: loginData.password,
      });

      if (error) {
        toast({
          title: "Login Failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Welcome back!",
          description: "You have successfully signed in.",
        });
        navigate("/");
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (signupData.password !== signupData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    if (signupData.password.length < 6) {
      toast({
        title: "Error",
        description: "Password must be at least 6 characters.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      const redirectUrl = `${window.location.origin}/`;

      const { error } = await supabase.auth.signUp({
        email: signupData.email,
        password: signupData.password,
        options: {
          emailRedirectTo: redirectUrl,
          data: {
            full_name: signupData.name,
          },
        },
      });

      if (error) {
        if (error.message.includes("already registered")) {
          toast({
            title: "Account Exists",
            description: "This email is already registered. Please sign in instead.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Signup Failed",
            description: error.message,
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "Account Created!",
          description: "Welcome to TEMADIPLOME.CE! You are now signed in.",
        });
        navigate("/");
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign In | TEMADIPLOME.CE</title>
        <meta
          name="description"
          content="Sign in to your TEMADIPLOME.CE account to manage orders, track progress, and communicate with our team."
        />
      </Helmet>
      <Layout>
        <section className="py-16 lg:py-24 bg-gradient-subtle min-h-[calc(100vh-5rem)]">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-hero mb-4">
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </div>
                <h1 className="font-heading text-3xl font-bold text-foreground">
                  Welcome Back
                </h1>
                <p className="text-muted-foreground mt-2">
                  Sign in to manage your orders
                </p>
              </motion.div>

              {/* Auth Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-card border border-border"
              >
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="login">Sign In</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                  </TabsList>

                  {/* Login Tab */}
                  <TabsContent value="login">
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="login-email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            id="login-email"
                            type="email"
                            placeholder="your@email.com"
                            className="pl-10"
                            value={loginData.email}
                            onChange={(e) =>
                              setLoginData({ ...loginData, email: e.target.value })
                            }
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="login-password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            id="login-password"
                            type="password"
                            placeholder="••••••••"
                            className="pl-10"
                            value={loginData.password}
                            onChange={(e) =>
                              setLoginData({ ...loginData, password: e.target.value })
                            }
                            required
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        className="w-full"
                        disabled={isLoading}
                      >
                        {isLoading ? "Signing in..." : "Sign In"}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </form>
                  </TabsContent>

                  {/* Signup Tab */}
                  <TabsContent value="signup">
                    <form onSubmit={handleSignup} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="signup-name">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            id="signup-name"
                            type="text"
                            placeholder="Your full name"
                            className="pl-10"
                            value={signupData.name}
                            onChange={(e) =>
                              setSignupData({ ...signupData, name: e.target.value })
                            }
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="signup-email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            id="signup-email"
                            type="email"
                            placeholder="your@email.com"
                            className="pl-10"
                            value={signupData.email}
                            onChange={(e) =>
                              setSignupData({ ...signupData, email: e.target.value })
                            }
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="signup-password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            id="signup-password"
                            type="password"
                            placeholder="••••••••"
                            className="pl-10"
                            value={signupData.password}
                            onChange={(e) =>
                              setSignupData({
                                ...signupData,
                                password: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="signup-confirm-password">
                          Confirm Password
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            id="signup-confirm-password"
                            type="password"
                            placeholder="••••••••"
                            className="pl-10"
                            value={signupData.confirmPassword}
                            onChange={(e) =>
                              setSignupData({
                                ...signupData,
                                confirmPassword: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        className="w-full"
                        disabled={isLoading}
                      >
                        {isLoading ? "Creating Account..." : "Create Account"}
                        <ArrowRight className="w-4 h-4" />
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        By signing up, you agree to our{" "}
                        <Link to="/terms" className="text-secondary hover:underline">
                          Terms
                        </Link>{" "}
                        and{" "}
                        <Link to="/privacy" className="text-secondary hover:underline">
                          Privacy Policy
                        </Link>
                      </p>
                    </form>
                  </TabsContent>
                </Tabs>
              </motion.div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Login;
