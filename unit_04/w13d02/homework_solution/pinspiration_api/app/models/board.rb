class Board < ApplicationRecord
  has_many :pins, dependent: :destroy
end
