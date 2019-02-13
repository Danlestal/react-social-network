import { injectable } from "inversify";
import { ICircleService } from "src/core/services/circles/ICircleService";
import { Circle } from "src/core/domain/circles/circle";

@injectable()
export class CircleService implements ICircleService {
  addCircle: (userId: string, circle: Circle) => Promise<string>;
  updateCircle: (userId: string, circleId: string, circle: Circle) => Promise<void>;
  deleteCircle: (userId: string, circleId: string) => Promise<void>;
  getCircles: (userId: string) => Promise<{ [circleId: string]: Circle; }>;
}
