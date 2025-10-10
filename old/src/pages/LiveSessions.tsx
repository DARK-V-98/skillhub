import { useState } from "react";
import { Calendar, Clock, Video, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const LiveSessions = () => {
  const [filter, setFilter] = useState("all");

  const sessions = [
    {
      title: "Advanced React Patterns",
      instructor: "Sarah Johnson",
      instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      date: "2025-10-12",
      time: "2:00 PM EST",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      status: "upcoming",
      participants: 45,
    },
    {
      title: "UI/UX Design Principles",
      instructor: "Emma Wilson",
      instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      date: "2025-10-11",
      time: "4:00 PM EST",
      thumbnail: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=250&fit=crop",
      status: "live",
      participants: 128,
    },
    {
      title: "Python for Data Analysis",
      instructor: "David Park",
      instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      date: "2025-10-13",
      time: "11:00 AM EST",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop",
      status: "upcoming",
      participants: 67,
    },
    {
      title: "Digital Marketing Strategies",
      instructor: "Michael Chen",
      instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      date: "2025-10-09",
      time: "1:00 PM EST",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      status: "ended",
      participants: 156,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "live":
        return "bg-destructive text-destructive-foreground animate-pulse";
      case "upcoming":
        return "bg-primary text-primary-foreground";
      case "ended":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div className="mb-4 md:mb-0">
              <h1 className="text-4xl font-bold mb-2">Live Sessions</h1>
              <p className="text-muted-foreground text-lg">
                Join interactive learning experiences with expert instructors
              </p>
            </div>
            <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
              <Plus className="h-4 w-4 mr-2" />
              Host a Session
            </Button>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-full sm:w-[200px]" aria-label="Filter sessions">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sessions</SelectItem>
                <SelectItem value="live">Live Now</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="ended">Past Sessions</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Sessions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sessions.map((session, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-card-hover transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img
                      src={session.thumbnail}
                      alt={`${session.title} session thumbnail`}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className={`absolute top-3 right-3 ${getStatusColor(session.status)}`}>
                      {session.status === "live" && <Video className="h-3 w-3 mr-1" />}
                      {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4 space-y-3">
                  <h3 className="font-semibold text-lg line-clamp-2">{session.title}</h3>
                  
                  <div className="flex items-center gap-2">
                    <img
                      src={session.instructorAvatar}
                      alt={`${session.instructor}'s avatar`}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm text-muted-foreground">{session.instructor}</span>
                  </div>

                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(session.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{session.time}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-6 h-6 rounded-full bg-muted border-2 border-background" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{session.participants} participants</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  {session.status === "live" ? (
                    <Button className="w-full bg-destructive hover:bg-destructive/90">
                      Join Live Session
                    </Button>
                  ) : session.status === "upcoming" ? (
                    <Button variant="outline" className="w-full">
                      Register Now
                    </Button>
                  ) : (
                    <Button variant="ghost" className="w-full">
                      View Recording
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {sessions.length === 0 && (
            <div className="text-center py-20">
              <Video className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <p className="text-2xl font-semibold mb-2">No sessions found</p>
              <p className="text-muted-foreground">Check back later for upcoming live sessions</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LiveSessions;
