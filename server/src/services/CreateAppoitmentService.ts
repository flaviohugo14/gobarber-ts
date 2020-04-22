import { startOfHour } from 'date-fns';

import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface Request {
  provider: string;
  date: Date;
}

/**
 * SOLID
 *
 * Single Responsability Principle
 * Dependency Invertion Principle
 */

class CreateAppointmentService {
  private appointmentsRepository: AppointmentsRepository;

  constructor(appointmentsRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ date, provider }: Request): Appointment {
    const appoitmentDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentsRepository.findByDate(
      date,
    );

    if (findAppointmentInSameDate) {
      throw new Error('This appointment is already booked');
    }

    const appointment = this.appointmentsRepository.create({
      provider,
      date: appoitmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
