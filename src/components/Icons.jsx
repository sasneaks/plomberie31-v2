export {
  Phone, Menu, X, ChevronRight, Clock, Shield, MapPin,
  Star, CheckCircle2, Droplets, Wrench, Flame, ShowerHead,
  Zap, Search, Heart, MessageCircle, Users, Award, Sparkles,
  BadgeCheck, Timer, CircleCheck, ArrowRight, ChevronDown,
  Mail, ArrowUpRight, Play, Send, Calendar, ThumbsUp,
  Quote, ExternalLink, ChevronLeft
} from 'lucide-react'

/* Icon component map for dynamic rendering */
import {
  Search, ShowerHead, Wrench, Flame, Sparkles,
  Droplets, Shield, Zap
} from 'lucide-react'

export const ICON_MAP = {
  Search: (props) => <Search {...props} />,
  ShowerHead: (props) => <ShowerHead {...props} />,
  Wrench: (props) => <Wrench {...props} />,
  Flame: (props) => <Flame {...props} />,
  Sparkles: (props) => <Sparkles {...props} />,
  Droplets: (props) => <Droplets {...props} />,
  Shield: (props) => <Shield {...props} />,
  Zap: (props) => <Zap {...props} />,
}
