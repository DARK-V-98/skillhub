
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Plus, Users, Video } from "lucide-react";
import Image from "next/image";

const sessions = [
  {
    title: "Advanced React Patterns",
    instructor: "Sarah Johnson",
    instructorAvatar: "https://i.pravatar.cc/40?u=sarah",
    date: "2025-10-12",
    time: "2:00 PM EST",
    thumbnail: "https://picsum.photos/seed/react-live/400/250",
    status: "upcoming",
    participants: 45,
  },
  {
    title: "UI/UX Design Principles",
    instructor: "Emma Wilson",
    instructorAvatar: "https://i.pravatar.cc/40?u=emma",
    date: "2025-10-11",
    time: "4:00 PM EST",
    thumbnail: "https://picsum.photos/seed/uiux-live/400/250",
    status: "live",
    participants: 128,
  },
  {
    title: "Python for Data Analysis",
    instructor: "David Park",
    instructorAvatar: "https://i.pravatar.cc/40?u=david",
    date: "2025-10-13",
    time: "11:00 AM EST",
    thumbnail: "https://picsum.photos/seed/python-live/400/250",
    status: "upcoming",
    participants: 67,
  },
  {
    title: "Digital Marketing Strategies",
    instructor: "Michael Chen",
    instructorAvatar: "https://i.pravatar.cc/40?u=michael",
    date: "2025-10-09",
    time: "1:00 PM EST",
    thumbnail: "https://picsum.photos/seed/marketing-live/400/250",
    status: "ended",
    participants: 156,
  },
];

const getStatusClasses = (status: string) => {
  switch (status) {
    case "live":
      return "bg-red-500 text-white animate-pulse";
    case "upcoming":
      return "bg-primary text-primary-foreground";
    case "ended":
      return "bg-muted text-muted-foreground";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

export default function LiveSessionsPage() {
  return (
    <div className="container py-12 animate-fade-in">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl font-bold tracking-tight">Live Sessions</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Join interactive learning experiences with expert instructors.
          </p>
        </div>
        <Button className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <Plus className="mr-2 h-4 w-4" />
          Host a Session
        </Button>
      </div>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row animate-fade-in-up" style={{animationDelay: '0.3s'}}>
        <Select>
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
        <Select>
          <SelectTrigger className="w-full sm:w-[200px]" aria-label="Filter by date">
            <SelectValue placeholder="Filter by date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any Date</SelectItem>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="this-week">This Week</SelectItem>
            <SelectItem value="this-month">This Month</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sessions.map((session, index) => (
          <div className="animate-fade-in-up" style={{animationDelay: `${index * 0.1 + 0.4}s`}}>
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src={session.thumbnail}
                  alt={`${session.title} session thumbnail`}
                  fill
                  className="object-cover"
                />
                <Badge className={`absolute top-3 right-3 ${getStatusClasses(session.status)}`}>
                  {session.status === "live" && <Video className="mr-1 h-3 w-3" />}
                  {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4 flex-grow">
              <h3 className="mb-2 font-semibold text-lg line-clamp-2">{session.title}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Image
                  src={session.instructorAvatar}
                  alt={`${session.instructor}'s avatar`}
                  width={24}
                  height={24}
                  className="h-6 w-6 rounded-full"
                />
                <span>{session.instructor}</span>
              </div>
              <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(session.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{session.time}</span>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <Users className="h-4 w-4" />
                  <span>{session.participants} participants</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4">
              {session.status === "live" ? (
                <Button className="w-full" variant="destructive">
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
          </div>
        ))}
      </div>
    </div>
  );
}
