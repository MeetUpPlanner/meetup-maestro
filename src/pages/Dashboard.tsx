import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { ActiveSessions } from "@/components/dashboard/ActiveSessions";
import { FriendLocations } from "@/components/dashboard/FriendLocations";
import { DirectionsPanel } from "@/components/dashboard/DirectionsPanel";
import { MobileNav } from "@/components/dashboard/MobileNav";

export type Session = {
  id: string;
  name: string;
  participants: number;
  venue: string;
  venueType: "coffee" | "restaurant" | "park" | "bar";
  status: "active" | "pending" | "completed";
  meetupTime: string;
  distance: string;
};

export type Friend = {
  id: string;
  name: string;
  avatar: string;
  location: string;
  distance: string;
  eta: string;
  isOnWay: boolean;
};

const mockSessions: Session[] = [
  {
    id: "1",
    name: "Saturday Brunch",
    participants: 4,
    venue: "The Rustic Table",
    venueType: "restaurant",
    status: "active",
    meetupTime: "11:30 AM",
    distance: "2.3 mi",
  },
  {
    id: "2",
    name: "Coffee Catch-up",
    participants: 2,
    venue: "Blue Bottle Coffee",
    venueType: "coffee",
    status: "pending",
    meetupTime: "3:00 PM",
    distance: "1.1 mi",
  },
  {
    id: "3",
    name: "Park Hangout",
    participants: 6,
    venue: "Central Park West",
    venueType: "park",
    status: "active",
    meetupTime: "2:00 PM",
    distance: "0.8 mi",
  },
];

const mockFriends: Friend[] = [
  {
    id: "1",
    name: "Sarah Chen",
    avatar: "SC",
    location: "Downtown",
    distance: "1.2 mi away",
    eta: "8 min",
    isOnWay: true,
  },
  {
    id: "2",
    name: "Marcus Johnson",
    avatar: "MJ",
    location: "Midtown",
    distance: "2.4 mi away",
    eta: "15 min",
    isOnWay: true,
  },
  {
    id: "3",
    name: "Emma Wilson",
    avatar: "EW",
    location: "Brooklyn",
    distance: "3.8 mi away",
    eta: "22 min",
    isOnWay: false,
  },
  {
    id: "4",
    name: "Alex Rivera",
    avatar: "AR",
    location: "Upper East",
    distance: "1.9 mi away",
    eta: "12 min",
    isOnWay: true,
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<"sessions" | "friends" | "directions">("sessions");
  const [selectedSession, setSelectedSession] = useState<Session | null>(mockSessions[0]);

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 pb-24 pt-6 lg:pb-8">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">
          <div className="lg:col-span-1">
            <ActiveSessions 
              sessions={mockSessions} 
              selectedSession={selectedSession}
              onSelectSession={setSelectedSession}
            />
          </div>
          <div className="lg:col-span-1">
            <FriendLocations friends={mockFriends} />
          </div>
          <div className="lg:col-span-1">
            <DirectionsPanel session={selectedSession} />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {activeTab === "sessions" && (
            <ActiveSessions 
              sessions={mockSessions}
              selectedSession={selectedSession}
              onSelectSession={setSelectedSession}
            />
          )}
          {activeTab === "friends" && (
            <FriendLocations friends={mockFriends} />
          )}
          {activeTab === "directions" && (
            <DirectionsPanel session={selectedSession} />
          )}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Dashboard;
