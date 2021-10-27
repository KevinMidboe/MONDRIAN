export interface IRack {
  hostname: string;
  ip_address?: string;
  proxmox?: boolean;
  admin_address?: string;
  image?: string;
  size?: number;
  element?: string;
}
