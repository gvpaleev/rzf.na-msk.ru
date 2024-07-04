import { Region } from "./Region"
import { Town } from "./Town"

export interface CityList {
  big_towns: Array<Town>
  regions: Array<Region>
  towns: Array<Town>
}
