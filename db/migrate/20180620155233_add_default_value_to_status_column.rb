class AddDefaultValueToStatusColumn < ActiveRecord::Migration[5.2]
  def change
    change_column_default :predictions, :status, "undetermined"
  end
end
