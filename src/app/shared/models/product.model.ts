export interface BikeListResult {
  bikes: Bike[];
}

export interface BikeItemResult {
  bike: BikeDetails;
}

export interface Bike extends Record<string, any> {
  date_stolen: 1745654400;
  description: string;
  frame_colors: string[];
  frame_model: string;
  id: number;
  is_stock_img: boolean;
  manufacturer_name: string;
  serial: string;
  status: string;
  stolen: boolean;
  stolen_coordinates: number[];
  stolen_location: string;
  title: string;
  url: string;
  large_img: string;
  year: number;
  propulsion_type_slug: string;
  cycle_type_slug: string;
  thumb: string;
}

interface StolenRecord {
  date_stolen: number;
  location: string;
  theft_description: string;
  locking_description: string;
  lock_defeat_description: string;
  police_report_number: number;
  created_at: number;
  id: number;
}

interface PublicImages {
  name: string;
  full: string;
  large: string;
  medium: string;
  thumb: string;
}

export interface BikeDetails extends Bike {
  stolen_record: StolenRecord,
  public_images: PublicImages[];
}
